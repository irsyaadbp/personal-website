import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  GithubIcon,
  LinkedinIcon,
  FileHeart,
  TwitterIcon,
} from "lucide-react";

function Hero() {
  function handleClick() {
    alert("cooming soon");
  }
  return (
    <div className="h-screen pt-20 md:pt-40 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
        <div className="lg:col-span-3">
          <span className="text-zinc-400 text-lg sm:text-xl">Hello,</span>
          <h1 className="text-4xl sm:text-6xl font-bold mt-2 mb-6">
            I'm Irsyaad Budi 👋
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 mb-8 leading-relaxed">
            Full-time frontend engineer, part-time full stack (which of course
            means I also deal with backend when needed). Sometimes forced to be
            a mobile dev, occasionally ends up deploying things. I also mentor
            other developers and love sharing what I’ve learned. Yeah, that’s
            me!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={handleClick}>
              See my work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={handleClick}>
              {" "}
              Read my blog{" "}
            </Button>
          </div>
          <div className="flex mt-3">
            <Button variant="ghost" size="lg" className="text-zinc-400">
              <a
                href="https://github.com/irsyaadbp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-zinc-400">
              <a
                href="https://x.com/irsyaadbp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-zinc-400">
              <a
                href="https://www.linkedin.com/in/irsyaad-budi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-zinc-400">
              <a
                href="https://bit.ly/new-portfolio-irsyaad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileHeart />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
