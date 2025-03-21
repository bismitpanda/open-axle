import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-black text-white">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <div className="text-center mb-10">
          <p className="text-white mb-4">// Incubatory'25 //</p>
          <h2 className="text-6xl font-bold">
            Ready to Incubate Big Ideas?
            <br />
            <span className="text-[#F28304]">Join us at Incubatory’ 25</span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            className="border-white text-white bg-black hover:bg-gray-900 hover:text-gray-100 p-5 rounded-full"
          >
            See Event Details
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 p-5 rounded-full">
            Participate Now
          </Button>
        </div>
      </div>
    </section>
  );
}
