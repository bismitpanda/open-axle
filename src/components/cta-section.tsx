import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-black text-white">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Incubate Big Ideas?
        </h2>
        <p className="text-gray-300 mb-8">Join us at Incubatory 25</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-[#FFF5EA]0 hover:text-white"
          >
            Learn More
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">Apply Now</Button>
        </div>
      </div>
    </section>
  );
}
