---
title: "TanStack Query, SWR, and useFetch Aren't the Cache We Expect"
description: "Why your understanding of 'cache' in modern data fetching is probably wrong."
date: 2026-04-27
tags: ["TanStack Query", "SWR", "Nuxt", "React", "Data fetching", "Web"]
published: true
heroImage: "/assets/images/writings/tanstack-query-swr-usefetch-arent-the-cache/hero.webp"
imageCredit: 'Photo by <a href="https://www.pexels.com/@pixabay/" rel="noopener noreferrer" target="_blank">Pixabay</a> on <a href="https://www.pexels.com/photo/blue-bright-lights-373543/" rel="noopener noreferrer" target="_blank">Pexels</a>.'
---

A lot of people say that TanStack Query (back then still called React Query) supports cache.

That is what I thought too.

When I tried it, something felt off. I reloaded the page, opened the Network tab, and it still did a normal fetch. No “served from cache,” no skipped request, just a request again. After a full reload, the JavaScript runtime starts clean, so in-memory state from the last visit is gone unless you add persistence on purpose. That is why a new fetch on refresh is the default, not a bug.

At that point, I started asking: wait, what kind of cache is this, actually?

So I went a bit deeper: reading the source, maintainers' answers in discussions, and trying to see what is really going on. Turns out, the “cache” they mean is not the cache I had in mind.

## The misunderstanding

My initial assumption was simple: cache means something like the browser cache or a server cache, data is stored in a more persistent place, and reload should not always trigger another request.

What actually happens is much simpler. It is mostly in-memory storage inside JavaScript, scoped to the running app. Conceptually, it is a bit like this:

```js
// Simplified mental model, not the real API. Uses global fetch: Request -> Response -> body.

const cacheData = {}

function getDetail() {
  const key = 'get-detail'

  if (cacheData[key]) return cacheData[key]

  const promise = (async () => {
    const res = await fetch('/api/detail')
    if (!res.ok) throw new Error('HTTP ' + res.status)
    return res.json()
  })()
  cacheData[key] = promise
  return promise
}
```

No magic, no built-in “persistent layer,” and no guarantee across a full page refresh unless you wire something extra. TanStack Query’s real cache is a proper store (deduping, garbage collection, async handling, and so on), and the snippet is only a way to think about the default shape of it, not a copy of the source.

You can add persistence (for example, syncing to `localStorage` with plugins) if you need it, but out of the box in the browser the usual story is still: live in memory for this session, then it is empty again after a hard reload. That is the part that clashed with my first mental image.

I was not the only one. Some friends also assumed “cache” here meant something like a server-side cache. It is not that either.

## TanStack Query and SWR

Both TanStack Query and SWR follow a similar idea: keep server state in memory, identify it with a key, and revalidate or sync when the library decides it is time. They are not really “cache systems” in the traditional HTTP sense. They behave more like **server state managers with synchronization** (the stale-while-revalidate family of ideas that SWR is named for).

So you still see network requests. Data can go stale. Refetching is part of the design. When you see a refetch, that is often the tool doing its job, not failing.

## What about useFetch?

Nuxt’s `useFetch` is a bit different. Under the hood it builds on `useAsyncData` and the stack Nuxt uses for requests (including **ofetch** for the actual fetches), and it ties into Nuxt’s payload and data layer so the same data can be used for SSR, hydration, and the client. That is why it can feel more “built into the framework” than TanStack Query or SWR, which you usually bring in as client-centric libraries in a React app.

It also explains why the docs warn against calling `useFetch` in the wrong place (for example, only in `onMounted` or from arbitrary functions without care): you can end up with more than one data entry, or a shape that does not line up with how Nuxt keys and deduplicates that payload, because **the key is everything** there too.

<p class="prose-writings-aside-note" lang="en">Off topic but related: a follow-up piece, <span class="prose-writings-link-soon" data-tooltip="Coming soon" role="button" aria-label="Nuxt 3 mistakes I have made, coming soon" aria-expanded="false" tabindex="0">Nuxt 3 mistakes I have made</span>, is in the works.</p>

## The key is everything

Across these tools, one idea keeps showing up: **the key**. It decides where a piece of data lives, whether two hooks share one bucket, and how you target invalidation or refetch. Same key, data lines up. Different key, you get another slot. You can often invalidate or revalidate using that key without hand-wiring the fetch function in every place.

That is what makes the model powerful: you can get UIs that feel up to date without turning every screen into a manual fetch script.

## Reusing the same in-memory data across pages

Here is a concrete case. On **page A** you show a list (for example, categories, projects, or customers). The user then goes to **page B**, a “create” screen, and you need a **dropdown** whose options are that same list. If you fetch again with a *different* key, you pay for a second request even though the data is still in memory for this session. If you use the **same key** the library already used for the list, the client can **reuse** what is already there (subject to `staleTime` / revalidation rules in TanStack Query and SWR, and to how Nuxt deduplicates when you use `useFetch` with the same `key` on client navigation). Under the hood `useFetch` still goes through the same `useAsyncData` + payload pipeline, but the API you write is `useFetch`, so the examples below use that.

A smaller example that is easier to reason about: two components on the **same** page both need the current user. One `useQuery` (or SWR) / one `useFetch` with a single shared `key` is enough, and you do not need to fetch the profile twice.

**TanStack Query (same `queryKey` on another route):**

```tsx
// routes or pages, same key, same bucket for this session
const { data: categories } = useQuery({
  queryKey: ['categories'],
  queryFn: async () => {
    const res = await fetch('/api/categories')
    if (!res.ok) throw new Error('HTTP ' + res.status)
    return res.json()
  },
})
```

**SWR (same key: here the key is the URL, so both screens must use the same one):**

```tsx
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error('HTTP ' + res.status)
  return res.json()
}
const { data: categories } = useSWR('/api/categories', fetcher)
```

**Nuxt 3:** the important part is **one `key` in `useFetch`** for that payload so it lines up with Nuxt’s data layer (sometimes referred to in docs and debugging as the **`nuxtData` / `payload` layer**). `useFetch` is a thin wrapper over `useAsyncData` + `$fetch`, but here we only show `useFetch` because that is what this article opened with. On **client-side navigation** from the list page to the create page, the second page can **reuse** the entry instead of always firing a new request, as long as the `key` matches and the data is still available:

Use the same call inside `<script setup lang="ts">` on both pages. The list page and the create page (dropdown) only differ by route, not by this snippet:

```ts
// pages/categories/index.vue (list)
// pages/categories/create.vue (form with dropdown, same useFetch and key)

const { data: categories } = await useFetch('/api/categories', {
  key: 'category-options',
})
```

Nuxt deduplicates by that `key`, so you get one shared `category-options` entry in the payload when you navigate from the list route to the create route in the same session.

If you only need to **read** what was already loaded (and avoid even expressing another fetcher), you can lean on the cached entry with `useNuxtData` again, for the same string key:

```ts
// Somewhere else in the app, after 'category-options' was populated
const { data: categories } = useNuxtData('category-options')
// Helpful when a child just needs the value, not a new network round-trip
```

Nothing in that layer will fabricate the list for you: if the key was never filled (for example, the user opened the create page in a new tab and skipped the list), you still need a `useFetch` on that route (with the same `key` and URL) or a server load that populates the same key.

This is the mental model: **one key, one slot in that session’s client-side `payload` / `nuxtData` entry**, and multiple components or routes can line up on it.

## It is not only about fewer requests

Besides skipping duplicate fetches, this style of “cache” is also useful for **wiring data without threading it through every layer**. You stop passing the same list through props from a parent, to a child, to another child, just so a deep leaf can render a label or a `<select>`. The leaf can read from the same **keyed store** (query cache, SWR cache, or Nuxt’s data for that `useFetch` `key`) instead. Fewer props, fewer `v-bind="$attrs"` chains, and a clearer place where “the server state for this key” lives.

Picture a **deep** component tree. Without a shared store, you end up with something like this:

```text
Parent
└── Child
    └── Child
        └── Child   ← here you finally need the list for the dropdown
```

You are tempted to do `list` on Parent, then `:list` → Child → Child → Child. With a keyed `useQuery` / `useSWR` / `useFetch` (or `useNuxtData` in Nuxt) at the depth where it is needed, **the leaf subscribes to the same key** the list page already filled. The shape above stays shallow for **data plumbing**, even if the visual tree is still deep.

```text
Same UI depth, but data attaches by key (conceptual)

Parent
└── Child
    └── Child
        └── Child ──▶  ['category-options']  (same useFetch / query key as the list page)
```

The diagram is about **where the tree splits visually** versus **where the data actually lives**, by key, not by prop depth.

## Closing thought

So no, this is not cache the way I expected.

And that is actually fine.

It is still cache, but it lives in **memory** on the user’s device. When the page reloads, that cache is gone, because the in-memory state goes with the old session.

I still find it useful to ask **how my data is staying in sync with the server**, not only whether the label “cache” matches what I pictured.

<p class="prose-writings-reference" lang="en">Reference: <a href="https://github.com/TanStack/query/discussions/3219">https://github.com/TanStack/query/discussions/3219</a></p>
