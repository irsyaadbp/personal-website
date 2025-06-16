import { ShinyButton } from "@/components/magicui/shiny-button";
import Socmed from "@/components/ui/socmed";

function AboutHero() {
  return (
    <section className="min-h-screen flex pt-20 relative">
      <div className="container mx-auto px-4 py-6 flex-1 flex flex-col justify-evenly">
        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-7xl lg:text-8xl font-bold mx-auto">
              6 Years In Still Just{" "}
              <span className="text-primary">Getting Started</span>
            </h2>
            <div className="mt-3">
              <ShinyButton className="rounded-full px-3.5 py-3 bg-white/90 dark:bg-zinc-900/90 ">
                <div className="flex gap-3 items-center">
                  <div className="rounded-full bg-primary w-11 h-11">
                    <img
                      src="/assets/images/photo.png"
                      alt="Irsyaad Budi Prasetianto"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="mr-1 capitalize text-lg">
                    Irsyaad Budi Prasetianto
                  </p>
                </div>
              </ShinyButton>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-lg sm:text-xl ">
            <p>
              <b>Full-stack Engineer</b>
            </p>
            <p className="text-zinc-400">
              Hi! I’m Irsyaad, a Full-stack Engineer who enjoys building fast,
              intuitive interfaces while also architecting solid, scalable
              backend systems. I’m also a mentor and curriculum developer for
              aspiring engineers.
            </p>
            <p className="text-zinc-400">
              Born in 2000, I started my journey through Android and WordPress
              development in high school. Since then, I’ve built web
              applications using Vue and React on the frontend, Express and
              PostgreSQL on the backend, and deployed projects with Docker and
              GitHub Actions.
            </p>
            <p className="text-zinc-400">
              I believe great engineers don’t just write code—they understand
              users, systems, and how to connect them. That’s why I love sharing
              what I learn through writing, mentoring, and building learning
              tools for others.
            </p>
            <Socmed />
          </div>
        </div>
        <div className="h-[0.1px] bg-border mt-12"></div>
      </div>
    </section>
  );
}

export default AboutHero;
