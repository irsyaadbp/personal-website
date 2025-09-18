import { ArrowRight } from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Button } from "@/components/ui/button";

export default function FeaturedProject({ posts = [] }: { posts: any[] }) {
  if (!posts.length) return;
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">
        Featured Project
      </h2>
      <div className="max-w-7xl mx-auto">
        <BentoGrid>
          {posts.map((feature, idx) => (
            <BentoCard key={idx} {...feature} role="button" />
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
