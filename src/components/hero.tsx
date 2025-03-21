import { Button } from "@/components/ui/button";
import { CircleDollarSign, User2, Users2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-4 max-w-lg">
          <h1 className="text-7xl font-semibold tracking-tighter">
            Stable Foundations for Companies of the Future.
          </h1>
          <p className="text-[#F28304] text-4xl font-bold">Incubatory'25.</p>
          <div className="flex flex-row bg-black text-white px-6 py-2 w-max rounded-full text-sm gap-6">
            <span className="flex flex-row items-center gap-2">
              <User2 size={16} /> Mentorship
            </span>
            <span className="flex flex-row items-center gap-2">
              <CircleDollarSign size={16} /> Funding
            </span>
            <span className="flex flex-row items-center gap-2">
              <Users2 size={16} /> Community
            </span>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Incubatory by OpenAxle is a launchpad for bold ideas, uniting a
            community of problem-solvers. We seek startups that defy the status
            quo with creativity, resilience, and purpose.
          </p>
          <div className="flex gap-2">
            <Button className="bg-green-700 rounded-full p-5">
              Get Started
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-sm">
          <Image
            src="/Hero.png"
            alt="Abstract architectural design"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
