import type { Locale } from '../i18n';

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  description?: string;
  bullets: string[];
  current?: boolean;
}

export interface ExperienceByLocale {
  en: Experience[];
  id: Experience[];
}

export const experiences: ExperienceByLocale = {
  en: [
    {
      current: true,
      role: 'Mid. Frontend Engineer',
      company: 'Privy',
      companyUrl: 'https://privy.id',
      period: 'Feb 2023 - June 2025',
      location: 'Yogyakarta, Indonesia',
      description: "Indonesia's leading digital signature & identity verification platform.",
      bullets: [
        'Handled development and maintenance of 6 core frontend products simultaneously, ensuring consistent performance across critical user-facing services.',
        'Built Privy Service Liveness SDK to help merchant apps verify service availability before transactions — adopted by 10+ partners.',
        'Developed the Privy Centralized Log Monitoring Dashboard to visualize and unify logs across all products, cutting debugging time by 40% and adopted by 10+ internal teams.',
        'Designed and implemented the initial version of Privy Digital ID Verification SDK, enabling Dukcapil-based KYC integration with potential to reduce merchant onboarding time by up to 30%.',
        'Improved and maintained Privy Registration, OAuth, and MFA SDK — powering authentication flows for 1M+ user sessions monthly across dozens of enterprise merchants.',
        "Developed mentorship curriculum for Privy's internal program, helping over 20 mentees — 90% of whom earned promotions after completion.",
        'Optimized memory usage in Nuxt app, reducing server resource consumption by 75% (from ~900MB to ~200MB), improving performance and stability in production environments.',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'Pijar Mahir',
      period: 'June 2022 - Feb 2023',
      location: 'Yogyakarta, Indonesia',
      bullets: [
        'Contributed to a company-wide design system adoption, reducing UI inconsistencies and speeding up delivery by ~30%.',
        'Participated in code reviews and improved team velocity by helping enforce a scalable component system.',
      ],
    },
    {
      role: 'Technical Trainer',
      company: 'Edtech Startup',
      period: 'March 2021 - June 2021',
      location: 'Remote',
      description: 'Edtech startup providing coding bootcamps for career switchers in Indonesia.',
      bullets: [
        'Selected candidates for bootcamp and mentored students on fullstack JavaScript (React & Node).',
        'Designed and delivered a module on building microservices with Express.js and PostgreSQL.',
        'Hosted a public webinar on React Native attended by 100+ participants.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Virus Digital Indonesia (now Virus Media)',
      companyUrl: 'https://www.linkedin.com/company/virus-media-indonesia',
      period: 'December 2019 - December 2020',
      location: 'Bogor, Indonesia',
      description: 'Tech consulting firm providing custom ERP and digital solutions to SMEs.',
      bullets: [
        'Co-developed internal coding guidelines and best practices for a growing engineering team.',
        'Built ERP modules (inventory, sales, accounting) using Express, GraphQL, and React, improving client operations.',
      ],
    },
    {
      role: 'IT Programmer',
      company: 'CV Karya Hidup Sentosa (Quick)',
      companyUrl: 'https://quick.co.id/',
      period: 'July 2019 - August 2019',
      location: 'Yogyakarta, Indonesia',
      description: "One of Indonesia's oldest manufacturing companies specializing in agricultural machinery.",
      bullets: [
        'Mentored junior interns in frontend and backend development practices.',
        'Migrated internal system to WordPress after resignation of key engineer, ensuring maintainability.',
        'Implemented REST APIs to offload business logic from mobile to server, improving scalability.',
      ],
    },
  ],
  id: [
    {
      current: true,
      role: 'Mid. Frontend Engineer',
      company: 'Privy',
      companyUrl: 'https://privy.id',
      period: 'Feb 2023 - Juni 2025',
      location: 'Yogyakarta, Indonesia',
      description: 'Platform tanda tangan digital & verifikasi identitas terdepan di Indonesia.',
      bullets: [
        'Menangani pengembangan dan pemeliharaan 6 produk frontend inti secara simultan, memastikan performa konsisten.',
        'Membangun Privy Service Liveness SDK untuk memverifikasi ketersediaan layanan — diadopsi oleh 10+ mitra.',
        'Mengembangkan Privy Centralized Log Monitoring Dashboard, memangkas waktu debugging 40% dan diadopsi oleh 10+ tim internal.',
        'Mendesain dan mengimplementasikan versi awal Privy Digital ID Verification SDK untuk integrasi KYC berbasis Dukcapil.',
        'Meningkatkan dan memelihara Privy Registration, OAuth, dan MFA SDK — menangani 1M+ sesi pengguna per bulan.',
        'Mengembangkan kurikulum mentorship internal Privy untuk 20+ mentee — 90% dipromosikan setelah program.',
        'Mengoptimalkan penggunaan memori aplikasi Nuxt, mengurangi konsumsi sumber daya server hingga 75% (dari ~900MB ke ~200MB).',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'Pijar Mahir',
      period: 'Juni 2022 - Feb 2023',
      location: 'Yogyakarta, Indonesia',
      bullets: [
        'Berkontribusi pada adopsi design system skala perusahaan, mempercepat delivery ~30%.',
        'Ikut dalam code review dan membantu memperkuat sistem komponen yang scalable.',
      ],
    },
    {
      role: 'Technical Trainer',
      company: 'Edtech Startup',
      period: 'Maret 2021 - Juni 2021',
      location: 'Remote',
      description: 'Startup edtech yang menyediakan bootcamp coding untuk career switcher di Indonesia.',
      bullets: [
        'Menyeleksi kandidat bootcamp dan mendampingi mahasiswa belajar fullstack JavaScript (React & Node).',
        'Mendesain dan menyampaikan modul microservices dengan Express.js dan PostgreSQL.',
        'Menjadi narasumber webinar publik tentang React Native yang dihadiri 100+ peserta.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Virus Digital Indonesia (sekarang Virus Media)',
      companyUrl: 'https://www.linkedin.com/company/virus-media-indonesia',
      period: 'Desember 2019 - Desember 2020',
      location: 'Bogor, Indonesia',
      description: 'Konsultan teknologi yang menyediakan solusi ERP dan digital untuk UKM.',
      bullets: [
        'Ikut mengembangkan pedoman coding internal dan best practice untuk tim engineering yang tumbuh.',
        'Membangun modul ERP (inventori, penjualan, akunting) menggunakan Express, GraphQL, dan React.',
      ],
    },
    {
      role: 'IT Programmer',
      company: 'CV Karya Hidup Sentosa (Quick)',
      companyUrl: 'https://quick.co.id/',
      period: 'Juli 2019 - Agustus 2019',
      location: 'Yogyakarta, Indonesia',
      description: 'Salah satu perusahaan manufaktur tertua di Indonesia yang berfokus pada mesin pertanian.',
      bullets: [
        'Mendampingi intern junior dalam praktik frontend dan backend development.',
        'Migrasi sistem internal ke WordPress setelah resignasi engineer kunci, menjaga maintainability.',
        'Mengimplementasikan REST API untuk memindahkan logika bisnis dari mobile ke server.',
      ],
    },
  ],
};

export function getExperiences(lang: Locale): Experience[] {
  return experiences[lang];
}
