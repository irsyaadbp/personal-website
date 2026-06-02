export interface Yap {
  date: string;
  title: string;
  author: string;
  href: string;
  image?: string;
}

export const yaps: Yap[] = [
  {
    date: 'Dec 20, 2025',
    title:
      'Kenapa AI malah bikin kita takut ketinggalan padahal belajar terus',
    author: 'jogjadevs.org',
    href: 'https://www.instagram.com/p/DSc2wL3D8iO/',
    image: '/assets/images/yapping/jogjadevs-ai.jpg',
  },
  {
    date: 'Apr 20, 2025',
    title:
      'TALK WITH KEMENLU | CLOSING PROJECT STAFF MAGANG - Berkarier Ala Gen Z',
    author: 'BEM STMM Yogyakarta',
    href: 'https://www.youtube.com/watch?v=yJLKPQQUunU',
    image: '/assets/images/yapping/stmm-talk-with-kemenlu.png',
  },
  {
    date: 'Sept 27, 2024',
    title:
      '[Paket All-in-One] Jadi Fullstack Developer Hebat dengan PHP, Laravel, Vue JS, dan Nuxt JS',
    author: 'Fastcampus',
    href: '/projects/fastcampus-fullstack-course',
    image: '/assets/images/yapping/fastcampus.png',
  },
  {
    date: 'May 14, 2024',
    title: 'Jadi Web Developer dari Nol Banget',
    author: 'Edspert.id',
    href: 'https://www.instagram.com/p/C6yR6-SST_C',
    image: '/assets/images/yapping/edspert-webdev-nol.png',
  },
  {
    date: 'Aug 01, 2023',
    title: 'Mentorship for Acceleration Program',
    author: 'Privy',
    href: 'https://www.linkedin.com/posts/irsyaad-budi_melesatmaju-frontend-activity-7082017272558485504-B4Qe/',
    image: '/assets/images/yapping/privy-acceleration.png',
  },
  {
    date: 'Mar 19, 2023',
    title: 'Webinar Programming React JS',
    author: 'Edspert.id',
    href: 'https://www.youtube.com/watch?v=vW_Y8C2W-Cs',
    image: '/assets/images/yapping/edspert-amazing-web-reactjs.png',
  },
  {
    date: 'Oct 08, 2021',
    title: 'Learn the basic of react native',
    author: 'Fazztrack',
    href: 'https://www.youtube.com/watch?v=puvM9ImY-_I',
    image: '/assets/images/yapping/fazztrack-basic-react-native.png',
  },
];
