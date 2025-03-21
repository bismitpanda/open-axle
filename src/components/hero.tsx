import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-4 max-w-lg">
          <h1 className="text-7xl font-semibold tracking-tighter">
            Stable Foundations for Companies of the Future.
          </h1>
          <p className="text-orange-500 text-4xl font-medium">Incubatory'25.</p>
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
