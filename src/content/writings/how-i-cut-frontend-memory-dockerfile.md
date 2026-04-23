---
title: "How I Cut Frontend Memory Consumption Using Only Dockerfile Changes"
description: "Cut frontend memory consumption with simple container-level changes."
date: 2026-04-23
tags: ["Docker", "Nuxt", "SSR", "Performance", "DevOps"]
published: true
heroImage: "/assets/images/writings/how-i-cut-frontend-memory-dockerfile/hero.webp"
imageCredit: 'Photo by <a href="https://unsplash.com/@zelebb?utm_source=syaad.dev&amp;utm_medium=referral" rel="noopener noreferrer" target="_blank">Andrey Matveev</a> on <a href="https://unsplash.com/?utm_source=syaad.dev&amp;utm_medium=referral" rel="noopener noreferrer" target="_blank">Unsplash</a>.'
---

In my previous company, I worked on optimizing our frontend application, focusing on reducing server memory consumption. There was a moment when a big event happened, which caused a spike in demand for our digital product at the same time. Since we are one of the largest providers, our platform suddenly received a huge spike in traffic.

During that time, we started getting alerts that server memory usage was reaching its limit, and in some cases, it even caused outages. But the interesting (unexpected!) part was, the frontend service was the first to go down due to high memory consumption, earlier than the backend services.

This became a serious concern for us, because normally backend services are expected to handle heavier processing. The fact that the frontend layer failed first indicated there was something inefficient in how the frontend service was built or running.

Because we needed a fast and safe solution without risking changes to the application code, I decided to analyze and optimize everything from the container level. So what did I do?

## Changing single stage to multi stage build

Initially, we were using a single-stage Docker build, which means all dependencies (like `node_modules`) were included in the final image.

This setup actually made sense before, because we were still using Nuxt 2. What I know, in Nuxt 2 still requires `node_modules` at runtime, so everything needed to be included in the final container.

However, we had already migrated to Nuxt 3, and the Dockerfile was not updated significantly after the migration.

From what I understood, Nuxt 3 supports standalone output (Next.js called like that), which means it doesn’t require full `node_modules` in production.

So I refactored it into multi stage build, so basically:

First, I create a build stage to install dependencies and build the app.

Then I create a second stage to copy only the necessary output.

And yeah, we got a smaller image size, because we can remove unnecessary dependencies.

## Switching to Alpine Linux Image

Previously, we used a full Linux base image. My assumption was that it might include unnecessary background processes or features.

Since the frontend server is mainly used for SSR, it doesn’t need complex OS features.

So I experimented with switching the Linux base image to Alpine Linux. By doing this, the container became much smaller and only included the essential components needed to run the application.

## Fixing Cluster Mode Configuration

And this was the most interesting part.

Initially, the app was running in cluster mode with the value set to `max`. That means one pod can spawn multiple instances and will try to utilize as much CPU and memory as possible.

Because of this behavior, even when we tried to increase the available resources (like adding more RAM), it didn’t really solve the problem. The application would just create more instances until it reached the new limit again.

At first, I wasn’t sure this was the issue. But after discussing with the SRE/DevOps team, I realized that we already had multiple pods running behind a load balancer. So having cluster mode inside each pod became redundant and made resource usage harder to control.

Besides that, we also had a weird accident where the service went down and the traffic was not distributed properly. My assumption was that one pod was consuming too much memory and crashed earlier than the others, which caused the load balancer to distribute traffic unevenly.

Based on these findings, I decided to change the cluster mode back to default (1 instance per pod), so each pod would have more predictable and controlled resource usage.

As a result, the memory usage became more stable and predictable. The traffic distribution also improved since the load balancer could properly spread requests across pods. Overall, the system became more reliable compared to before.

From this experience, I realized that optimization is not always about changing the code. In many cases, how the application is built and run matters more.

Even small changes in the Dockerfile and runtime configuration can give a significant impact in production.
