import { ArrowUpRight } from "lucide-react";

export default function YappingCard({ item }: { item: any }) {
  return (
    <a
      href={item.href}
      className="group flex justify-between py-8 px-6 hover:bg-muted/5 transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex-1 flex flex-col lg:flex-row items-start lg:gap-8">
        <p className="text-muted-foreground text-sm font-medium min-w-[100px] mt-2">
          {item.date}
        </p>
        <div className="flex-1">
          <h2 className="text-foreground md:text-2xl font-medium leading-relaxed mb-2 group-hover:text-primary transition-colors font-display">
            {item.title}
          </h2>
          <p className="text-muted-foreground text-sm font-sans">
            {item.author}
          </p>
        </div>
      </div>
      <div className="ml-6">
        <ArrowUpRight className="w-8 h-8 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
      </div>
    </a>
  );
}
