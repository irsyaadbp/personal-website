import {
  BellIcon,
  Share2Icon,
  // FileTextIcon,
  CalendarIcon,
  ArrowRight,
  FileTextIcon,
} from "lucide-react";

// import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
// import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";

// const files = [
//   {
//     name: "bitcoin.pdf",
//     body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
//   },
//   {
//     name: "finances.xlsx",
//     body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
//   },
//   {
//     name: "logo.svg",
//     body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
//   },
//   {
//     name: "keys.gpg",
//     body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
//   },
//   {
//     name: "seed.txt",
//     body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
//   },
// ];

const features = [
  // {
  //   Icon: FileTextIcon,
  //   name: "Project 1",
  //   description: "We automatically save your files as you type.",
  //   href: "#",
  //   cta: "Learn more",
  //   className: "col-span-3 lg:col-span-1",
  //   background: (
  //     <Marquee
  //       pauseOnHover
  //       className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
  //     >
  //       {files.map((f, idx) => (
  //         <figure
  //           key={idx}
  //           className={cn(
  //             "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
  //             "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
  //             "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
  //             "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
  //           )}
  //         >
  //           <div className="flex flex-row items-center gap-2">
  //             <div className="flex flex-col">
  //               <figcaption className="text-sm font-medium dark:text-white ">
  //                 {f.name}
  //               </figcaption>
  //             </div>
  //           </div>
  //           <blockquote className="mt-2 text-xs">{f.body}</blockquote>
  //         </figure>
  //       ))}
  //     </Marquee>
  //   ),
  // },
  {
    Icon: FileTextIcon,
    name: "CIMB Niaga Mortgage Application",
    description:
      "An online mortgage application system built for CIMB Niaga. Includes a conversion-optimized landing page and an internal CMS to manage content and leads efficiently.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    techStack: ["Nuxt.js", "Vuetify"],
    background: <div />,
  },
  {
    Icon: BellIcon,
    name: "Black Diamond Resources",
    description:
      "A corporate profile website for an international energy company. It supports multiple languages and integrates with TradingView for real-time commodity price visualization. Includes a custom CMS for content management.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    techStack: ["Nuxt.js", "Vuetify", "TradingView API", "Laravel", "GSAP"],
    background: (
      <div className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "PJBS M-Facilities",
    description:
      "A mobile application for internal facility management used by PJBS staff. Built for both iOS and Android platforms, with a CMS to manage dynamic data and content.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    techStack: ["React Native", "Openstreetmap API", "Geolocation API"],
    background: (
      <div className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "ERP Module System",
    description:
      "A modular ERP system designed for businesses, covering key operational areas such as accounting, inventory management, and sales. The UI was built to support scalability and ease of use.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    techStack: ["Express.js", "Vue.js", "Tailwind CSS", "GraphQL"],
    background: (
      <div className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90" />
    ),
  },
];

export default function FeaturedProject() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">
        Featured Project
      </h2>
      <div className="max-w-6xl mx-auto">
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard
              key={idx}
              {...feature}
              role="button"
              onClick={() => alert(JSON.stringify(feature))}
            />
          ))}
        </BentoGrid>
      </div>
      <div className="flex justify-center mt-12">
        <a href="/projects">
          <Button variant="outline" size={"lg"}>
            See more <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  );
}
