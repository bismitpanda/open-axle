import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export default function FeaturesGrid() {
  const features: Feature[] = [
    {
      title: "Mentorship",
      description: "Gorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/Services - Mentorship.png",
    },
    {
      title: "Funding",
      description: "Gorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/Services - Funding.png",
    },
    {
      title: "Community",
      description: "Gorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/Services - Community.png",
    },
  ];

  return (
    <section className="w-full py-12 bg-[#FFF5EA]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-10">
          <p className="text-gray-600 mb-4">// Services //</p>
          <h2 className="text-6xl font-bold">
            We support ideas that <br />
            drive change.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#FFF5EA] border border-[#FB8B09] rounded-[56px]"
            >
              <CardContent className="px-16 py-8 flex flex-col items-center text-center">
                <div className="w-40 h-40 mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={160}
                    height={160}
                  />
                </div>
                <h3 className="text-2xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
