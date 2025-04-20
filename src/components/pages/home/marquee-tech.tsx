import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "React",
    link: "https://react.dev",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Next",
    link: "https://nextjs.org",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Vue",
    link: "https://vuejs.org/",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Nuxt",
    link: "https://nuxt.com/",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Astro",
    link: "https://astro.build/",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Javascript",
    link: "",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Typescript",
    link: "",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "PHP",
    link: "https://php.net/",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Laravel",
    link: "https://laravel.com/",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Wordpress",
    link: "https://wordpress.org/",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Firebase",
    link: "https://firebase.google.com",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Supabase",
    link: "https://supabase.com/",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Docker",
    link: "https://www.docker.com/",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Linux",
    link: "https://www.linux.org/",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  link,
}: {
  img: string;
  name: string;
  link: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {!!link && <p className="text-xs font-medium text-zinc-400">{link}</p>}
        </div>
      </div>
    </figure>
  );
};

export function MarqueeTech() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
