import React from "react";

export interface TimelineItemProps {
  title: string;
  company: {
    name: string;
    logo: string;
    url: string;
    customStyle?: React.CSSProperties;
  };
  date: string;
  location: string;
  description: string | React.ReactNode;
}

export default function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
}

const TimelineItem = ({
  title,
  company,
  date,
  location,
  description,
}: TimelineItemProps) => {
  return (
    <div className="flex gap-4 xl:gap-8 group/timeline">
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 bg-foreground dark:bg-white rounded-full"></div>
        <div className="w-[0.1px] flex-1 bg-foreground/30 dark:bg-white rounded-full -mt-1 transition-all duration-700"></div>
      </div>
      <div>
        <div className="pb-2">
          <p className="text-lg font-bold">{title}</p>
          <div className="flex gap-2 xl:items-center mt-1 text-sm flex-col xl:flex-row">
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center underline text-zinc-500 dark:text-zinc-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                style={{
                  height: "16px",
                  width: "auto",
                  ...(company.customStyle || {}),
                }}
                draggable={false}
              />
              {company.name}
            </a>
            <div className="w-3 h-[0.2px] bg-foreground dark:bg-white rounded-full hidden xl:block"></div>
            <div className="flex gap-2 items-center flex-wrap">
              <div className="text-zinc-400">{date}</div>
              <div className="w-3 h-[0.2px] bg-foreground dark:bg-white rounded-full"></div>
              <div className="text-zinc-400">{location}</div>
            </div>
          </div>
          <div className="text-zinc-400 mt-3 leading-relaxed">
            {typeof description === "string" ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
