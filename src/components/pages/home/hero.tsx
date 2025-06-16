import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import { MarqueeTech } from "./marquee-tech";
import Socmed from "@/components/ui/socmed";

function Hero() {
  function handleClick() {
    alert("Coming Soon");
  }
  return (
    <div className="min-h-screen pt-20 md:pt-40 flex justify-around flex-col">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <span className="text-zinc-400 text-lg sm:text-xl">Hi,</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-2 mb-6">
              I'm Irsyaad Budi 👋
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 mb-8 leading-relaxed">
              Frontend engineer by day, backend warrior by night, accidental
              mobile dev on weekends, and unwilling DevOps every time something
              needs to be deployed. I mentor devs not because I’m wise, but to
              help them avoid my mistakes—or at least make cooler ones. Fueled
              by caffeine, memes, and a healthy dose of impostor syndrome.
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
            <Socmed />
          </div>
        </div>
      </div>
      <MarqueeTech />
    </div>
  );
}

export default Hero;
