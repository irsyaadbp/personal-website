import Timeline, { type TimelineItemProps } from "@/components/ui/timeline";
import { BriefcaseBusiness } from "lucide-react";

const experiences: TimelineItemProps[] = [
  {
    title: "Mid. Frontend Engineer",
    company: {
      name: "Privy",
      logo: "/assets/images/company/privy.svg",
      url: "https://privy.id",
    },
    date: "Feb 2023 - June 2025",
    location: "Yogyakarta, Indonesia",
    description: (
      <>
        <p>
          Indonesia's leading digital signature & identity verification
          platform.
        </p>
        <ul className="list-disc pl-5">
          <li>
            Handled development and maintenance of 6 core frontend products
            simultaneously, ensuring consistent performance across critical
            user-facing services.
          </li>
          <li>
            Built Privy Service Liveness SDK to help merchant apps verify
            service availability before transactions — adopted by 10+ partners.
          </li>
          <li>
            Developed the Privy Centralized Log Monitoring Dashboard to
            visualize and unify logs across all products, cutting debugging time
            by 40% and adopted by 10+ internal teams
          </li>
          <li>
            Designed and implemented the initial version of Privy Digital ID
            Verification SDK, enabling Dukcapil-based KYC integration with
            potential to reduce merchant onboarding time by up to 30%.
          </li>
          <li>
            Improved and maintained Privy Registration, OAuth, and MFA SDK —
            powering authentication flows for 1M+ user sessions monthly across
            dozens of enterprise merchants.
          </li>
          <li>
            Developed mentorship curriculum for Privy's internal program,
            helping over 20 mentees — 90% of whom earned promotions after
            completion.
          </li>
          <li>
            Optimized memory usage in Nuxt app, reducing server resource
            consumption by 75% (from ~900MB to ~200MB), improving performance
            and stability in production environments.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Frontend Engineer",
    company: {
      name: "Privy",
      logo: "/assets/images/company/privy.svg",
      url: "https://privy.id",
    },
    date: "June 2022 - Feb 2023",
    location: "Yogyakarta, Indonesia",
    description: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Contributed to a company-wide design system adoption, reducing UI
            inconsistencies and speeding up delivery by ~30%.
          </li>
          <li>
            Participated in code reviews and improved team velocity by helping
            enforce a scalable component system.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Technical Trainer",
    company: {
      name: "Arkademy (now Pijarcamp)",
      logo: "/assets/images/company/pijar.svg",
      url: "https://camp.pijarmahir.id/",
    },
    date: "March 2021 - June 2021",
    location: "Remote",
    description: (
      <>
        <p>
          Edtech startup providing coding bootcamps for career switchers in
          Indonesia.
        </p>
        <ul className="list-disc pl-5">
          <li>
            Selected candidates for bootcamp and mentored students on fullstack
            JavaScript (React & Node).
          </li>
          <li>
            Designed and delivered a module on building microservices with
            Express.js and PostgreSQL.
          </li>
          <li>
            Hosted a public webinar on React Native attended by 100+
            participants.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Software Engineer",
    company: {
      name: "Virus Digital Indonesia (now Virus Media)",
      logo: "/assets/images/company/virus.jpg",
      url: "https://www.linkedin.com/company/virus-media-indonesia",
      customStyle: {
        objectFit: "cover",
        borderRadius: "50%",
        marginRight: "4px",
      },
    },
    date: "December 2019 - December 2020",
    location: "Bogor, Indonesia",
    description: (
      <>
        <p>
          Tech consulting firm providing custom ERP and digital solutions to
          SMEs.
        </p>
        <ul className="list-disc pl-5">
          <li>
            Co-developed internal coding guidelines and best practices for a
            growing engineering team.
          </li>
          <li>
            Built ERP modules (inventory, sales, accounting) using Express,
            GraphQL, and React, improving client operations.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "IT Programmer",
    company: {
      name: "CV Karya Hidup Sentosa (Quick)",
      logo: "/assets/images/company/quick.jpg",
      url: "https://quick.co.id/",
      customStyle: {
        objectFit: "cover",
        borderRadius: "50%",
        marginRight: "4px",
      },
    },
    date: "July 2019 - August 2019",
    location: "Yogyakarta, Indonesia",
    description: (
      <>
        <p>
          One of Indonesia's oldest manufacturing companies specializing in
          agricultural machinery. Indonesia
        </p>
        <ul className="list-disc pl-5">
          <li>
            Mentored junior interns in frontend and backend development
            practices.
          </li>
          <li>
            Migrated internal system to WordPress after resignation of key
            engineer, ensuring maintainability.
          </li>
          <li>
            Implemented REST APIs to offload business logic from mobile to
            server, improving scalability.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Internship Programmer",
    company: {
      name: "CV Karya Hidup Sentosa (Quick)",
      logo: "/assets/images/company/quick.jpg",
      url: "https://quick.co.id/",
      customStyle: {
        objectFit: "cover",
        borderRadius: "50%",
        marginRight: "4px",
      },
    },
    date: "July 2019 - August 2019",
    location: "Yogyakarta, Indonesia",
    description: (
      <>
        <p>
          One of Indonesia's oldest manufacturing companies specializing in
          agricultural machinery. Indonesia
        </p>
        <ul className="list-disc pl-5">
          <li>
            Assisted in building and maintaining internal tooling and mobile
            apps.
          </li>
        </ul>
      </>
    ),
  },
];

export default function Experiences() {
  return (
    <section className="relative min-h-screen">
      <div className="container mx-auto px-4 py-6 flex flex-col xl:flex-row gap-4">
        <div className="flex gap-4 flex-col items-start w-full xl:w-2/3">
          <div className="rounded-xl: p-3 border">
            <BriefcaseBusiness />
          </div>
          <h2 className="text-xl xl::text-2xl font-bold ">My Experiences</h2>
        </div>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}
