---
title: "CIMB Niaga Mortgage Application"
description: "An online mortgage application system built for CIMB Niaga, with a conversion-optimized landing page and an internal CMS to manage content and leads efficiently."
client: "CIMB Niaga"
role: "Frontend Engineer"
year: "2021"
techStack: ["Nuxt 2", "Vue 2", "Vuex", "Vuetify", "Ruby on Rails"]
heroImage: "/assets/images/projects/cimb-mortgage/hero.webp"
featured: false
order: 9
---

## Background

Our users were struggling with a fragmented, paper-based mortgage application process that caused delays and drop-offs. The main business goals were to increase lead conversion, accelerate verification workflows, and reduce manual workload for the sales team. This project aimed to deliver a seamless, end-to-end digital experience that would guide applicants from awareness to submission in under five minutes.

## Responsibilities

As the Frontend Engineer, I owned the entire Nuxt 2 and Vue 2 codebase for both the public landing page and the internal CMS.

## Architecture & Tech Stack

- Nuxt 2 SSR for faster page loads and SEO optimization on the landing page
- Vuex for predictable, centralized state management
- Vuetify for pre-built, accessible UI components and theming consistency
- SASS modules for scoped, maintainable styling
- Ruby on Rails API providing endpoints for user authentication (OTP, JWT), application submission, and lead tracking
- PostgreSQL as the primary data store, Redis for caching and rate limiting
- LDAP integration for corporate user authentication and provisioning

## Mobile-First & Responsiveness

The design system was built mobile-first, prioritizing touch-friendly controls and single-column layouts for screens down to 375px. Key techniques included:

- Media queries to adjust typography, spacing, and component visibility on larger viewports
- Continuous testing on physical devices and emulators to ensure pixel-perfect rendering

## Internal CMS

We developed a custom Nuxt module for the CMS with a multi-role "maker–checker" approval workflow, enabling CIMB Niaga staff to:

- **Maker role**: draft and edit landing-page content, configure form fields, and manage preliminary lead entries
- **Checker role**: review, approve, or request revisions on all maker submissions before they go live
- **LDAP-based user management**: sync users and groups from the corporate directory, enforce single-sign-on, and auto-assign maker/checker/admin roles

Key features included:

- WYSIWYG editor for rich content management
- Lead dashboard with status filters (Draft, Pending Approval, Approved, Rejected)
- Real-time notifications for maker/checker actions
- Audit trail capturing timestamps, user IDs, and change summaries for compliance

## Challenges & Learnings

One major challenge was optimizing a long, multi-step application form without compromising performance on low-end devices. Initial builds felt sluggish, so I:

- Implemented lazy loading for form fields and components to reduce initial bundle size
- Optimized image loading with responsive sizes and srcset attributes
- Utilized Vue's built-in transition system for smooth form field animations

Another significant hurdle was that this was my first public Vue project—I'd previously worked exclusively with React. To bridge the gap, I:

- Invested time in the official Vue.js docs to master template syntax, directives, and reactivity
- Mapped familiar React concepts (hooks, JSX) to Vue equivalents (Composition API, Single-File Components)
- Refactored shared utilities from React to Vue to internalize best practices
- Paired with senior Vue engineers for code reviews and design discussions

A further challenge involved exporting large datasets for CMS reports. Synchronous export requests often timed out under heavy load. To solve this, we:

- Introduced an asynchronous export workflow via job creation endpoint
- Enqueued the job on the backend using Sidekiq, processed data in the background, and stored results in Minio
- Exposed an endpoint to poll job status and surfaced a download link once complete

In hindsight, adopting Server-Sent Events (SSE) for real-time status updates would be more optimal than polling.
