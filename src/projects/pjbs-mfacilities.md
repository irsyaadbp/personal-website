---
title: "PJBS Services Application"
description: "A cross-platform internal mobile application for PT PJBS, built with React Native and TypeScript, available on both iOS and Android. It streamlines daily operations, including vehicle booking, meeting scheduling, office supplies requests, archive management, FAQs, and integrated CMS for monitoring and data management."
short_description: "A cross-platform internal mobile application for PT PJBS, built with React Native and TypeScript, available on both iOS and Android."
image: "/assets/images/projects/pjbs-mfacilities/hero@transparent.webp"
link: ""
featured: true
info:
  - title: "Client"
    description: "PT Pembangkitan Jawa Bali Services (PJBS)"
  - title: "Role"
    description: "Mobile Developer"
  - title: "Year"
    description: "2020"
  - title: "Tech Stack"
    description: "React Native, TypeScript"
---

## Background

PJBS previously managed operational tasks such as vehicle booking, meeting scheduling, and office supply requests manually. This caused inefficiencies, miscommunication, and lack of centralized monitoring.

## Solution

We built a cross-platform internal mobile application for iOS and Android, covering multiple operational needs in one ecosystem. Each feature had its own module and role-based access. A CMS dashboard (developed by the backend team) supported monitoring and data management.

## Architecture & Tech Stack

- **React Native (TypeScript)** - cross-platform development for iOS & Android
- **Redux** – centralized state management
- **Axios** – REST API integration
- **Push Notifications** – real-time updates
- **OpenStreetMap Nominatim** – geocoding service to resolve addresses into coordinates
- **OpenRouteService** – routing engine for calculating driver navigation paths and travel times
- **CodeIgniter CMS & API** – developed by backend team

## Feature: Vehicle Booking

The vehicle booking module allows employees to request cars directly from the app, while managers can review and approve requests in real time. Once approved, admins assign drivers, and drivers receive their schedules instantly with integrated routing support. This feature reduces scheduling conflicts, ensures better fleet utilization, and makes the approval flow transparent across roles.

## Feature: Meeting

The meeting module centralizes both physical and online meeting scheduling. Employees can request rooms or online slots, while the meeting admin manages bookings to avoid conflicts. An e-meeting admin ensures technical setup and smooth coordination for remote participants. By streamlining this process, PJBS reduces double-bookings and improves efficiency in managing both offline and online meetings.

## Feature: ATK (Office Supplies)

This module digitizes the process of requesting and approving office supplies. Employees can request items such as pens or paper, managers validate whether requests are necessary, and admins process distribution while updating stock automatically. With this system, PJBS reduces manual paperwork and ensures transparent inventory tracking for office essentials.

## Feature: Archive

The archive module serves as a digital repository where employees can search and retrieve documents quickly, while admins upload and categorize files securely. This reduces reliance on physical storage, ensures data security, and provides employees with easier access to the resources they need.

## Feature: FAQ

The FAQ module provides a centralized help center for employees to find quick answers without needing to contact admins. It organizes common questions by category and allows staff to search easily, which reduces repetitive queries and improves information accessibility.

## Feature: CMS (Web Dashboard)

The CMS is a web-based dashboard, built by the backend team, that allows PJBS administrators to monitor requests, manage master data, and generate reports. It complements the mobile app by giving admins a higher-level view of daily operations. My main focus was the mobile app; CMS development was handled separately by the backend team.

![Mobile Design for CMS Dashboard](/assets/images/projects/pjbs-mfacilities/cms.webp)

## Challenges & Learnings

One major challenge was implementing a custom calendar scheduling system for meeting reservations. Off-the-shelf calendar libraries didn’t support PJBS’s complex approval workflows, so I:

- Built a scheduling component from scratch in React Native
- Integrated role-based logic (employee request → manager approval → admin assignment)
- Ensured smooth UI updates across iOS and Android

Another significant hurdle was the integration of map & routing features for drivers. Since accuracy and usability were critical, I:

- Used OpenStreetMap Nominatim for address geocoding
- Implemented OpenRouteService for real-time routing and travel time estimation
- Optimized map rendering to work efficiently on low-end Android devices

Real-time updates were also a challenge, especially with notifications for approvals, meeting reminders, and driver schedules. To solve this, I:

- Implemented push notifications across iOS and Android
- Designed clear notification categories (booking, meeting, archive)
- Synced notifications with app state via Redux to avoid duplication or missed updates

A further challenge was handling multiple roles in a single app (employee, manager, driver, admin). To manage this complexity, I:

- Implemented conditional rendering based on authentication and role
- Designed consistent UI patterns so users could switch roles without confusion

Learnings:

- Gained hands-on experience in building bespoke scheduling systems without relying heavily on third-party libraries
- Strengthened expertise in real-time features such as notifications and routing
- Improved skills in role-based access control for mobile apps
- Learned to collaborate more effectively with backend teams to align APIs with frontend needs
