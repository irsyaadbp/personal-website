---
title: "Mount Seerah Learning Application"
description: "A mobile-first web application built with React and TypeScript, designed to provide interactive Islamic learning through gamification. Features include dynamic quizzes, trails, custom characters, theme customization, and a CMS (built with Laravel) for managing content and visuals."
short_description: "A mobile-first web application for interactive Islamic learning with gamification, quizzes, and CMS-powered customization."
image: "/assets/images/projects/mountseerah/hero.webp"
link: "https://mountseerah.com/"
featured: true
info:
  - title: "Client"
    description: "Mount Seerah"
  - title: "Role"
    description: "Frontend Web Developer"
  - title: "Year"
    description: "2025"
  - title: "Tech Stack"
    description: "React, TypeScript, Laravel (CMS & API by backend team)"
---

## Background

Mount Seerah aims to deliver Islamic knowledge in a more engaging way for learners of all ages. Instead of static text or video content, the platform emphasizes gamification through interactive trails, quizzes, and leaderboards to motivate continuous learning.

The project required a mobile-first approach so that users could access the platform easily from smartphones. When opened on desktop, the interface remains consistent with a larger viewport, ensuring simplicity and focus on the learning experience.

## Solution

We developed a mobile-first **web application** using **React and TypeScript**, integrated with a **Laravel-based CMS** and API (built by the backend team). The CMS allows administrators to update content, quizzes, trails, and even visual themes such as the primary color, images, and custom characters without modifying the frontend code.

The gamified approach includes interactive journeys with quizzes, difficulty levels, real-time feedback, and a leaderboard that learners can share on social media.

## Architecture & Tech Stack

- **React (TypeScript)** – modular, type-safe frontend development
- **SWR** – data fetching with built-in caching, revalidation, and error handling
- **Context API** – lightweight state management for global app state (theme, user, quiz progress)
- **Sign in with Google** – seamless authentication option allowing users to quickly log in using their Google account
- **Custom Theming System** – supports CMS-driven updates for primary colors, images, and avatars
- **Laravel CMS & API** – built by backend team, powers dynamic content and asset management
- **Static HTML Generator** – custom script to generate static files for leaderboard sharing metadata (resolving CSR & SEO issues)

## Feature: Gamified Learning Journey

Learners can follow structured "trails" that represent chapters or topics. Each trail contains quizzes, checkpoints, and progress indicators. Quizzes provide real-time validation with states like correct, wrong, time-up, and completion.

![Design for gamification learning journey](/assets/images/projects/mountseerah/gamified.webp)

## Feature: Custom Characters

Through CMS integration, users can personalize their avatars/characters, making the learning experience more personal and engaging. Assets are dynamically served based on CMS settings.

![Design for customization characters](/assets/images/projects/mountseerah/custom-char.webp)

## Feature: Theme Customization

The CMS allows admins to change the primary color, background image, and other visual elements. The frontend was designed with modular theming so that updates propagate consistently across the application.

## Feature: Leaderboard & Social Sharing

A leaderboard motivates learners by ranking performance. One key feature is the ability to share leaderboard results on social media. Since the app was CSR-based, metadata wasn’t being read by social platforms. To solve this, we built a **static HTML generator** that produces shareable files with proper meta tags.

![Design for leaderboard](/assets/images/projects/mountseerah/leaderboard.webp)

## Feature: CMS Integration

Although I did not develop the CMS itself (handled by the backend team using Laravel), I integrated its APIs into the frontend. This enabled dynamic management of quizzes, trails, characters, and themes, giving admins full control without code changes.

## Challenges & Learnings

**1. CMS-driven Customization**  
Challenge: Making character, theme, and content updates fully dynamic without breaking the design system.  
Solution: Built a modular theming architecture in React and optimized asset handling to keep performance smooth.

**2. CSR Metadata Issue for Social Sharing**  
Challenge: React CSR apps don’t render metadata for crawlers, causing missing Open Graph/Twitter previews.  
Solution: Implemented a static HTML generator for leaderboard sharing pages, ensuring proper meta tags are readable by social platforms.

**3. Mobile-First Responsive Design**  
Challenge: The app needed to feel natural on mobile while still usable on desktop.  
Solution: Designed layouts with mobile-first breakpoints, scaling consistently to larger viewports without changing the app’s flow.

### Learnings

- Strengthened skills in **dynamic theming and customization** for React applications
- Learned practical solutions for **SEO and social sharing in CSR apps**
- Improved integration workflows between **frontend and Laravel CMS backend teams**
- Gained experience in designing **mobile-first systems** that scale well to desktop
