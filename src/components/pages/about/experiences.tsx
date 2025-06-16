import { BriefcaseBusiness } from "lucide-react";

export default function Experiences() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-6 grid lg:grid-cols-2 gap-4">
        <div className="flex gap-4 flex-col items-start">
          <div className="rounded-lg p-3 border">
            <BriefcaseBusiness />
          </div>
          <h2 className="text-xl lg:text-2xl font-bold ">My Experiences</h2>
        </div>
      </div>
    </section>
  );
}
