import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface InvestmentArea {
  title: string;
  description: string;
  image: string;
}

export default function InvestmentAreas() {
  const areas: InvestmentArea[] = [
    {
      title: "A.I.",
      description: "Innovations that use AI to solve complex challenges",
      image: "/Participation Categories - AI.png",
    },
    {
      title: "Cybersecurity",
      description:
        "Pioneering ideas that keep digital world safe, secure and ready for tomorrow.",
      image: "/Participation Categories - Cybersecurity.png",
    },
    {
      title: "Web3",
      description:
        "Empowers users with decentralized applications, enhancing data ownership and reducing reliance on centralized platforms.",
      image: "/Participation Categories - Web3.png",
    },
    {
      title: "Blockchain",
      description:
        "Revolutionizes data integrity and security across industries by providing transparent, tamper-proof transaction records.",
      image: "/Participation Categories - Blockchain.png",
    },
    {
      title: "Open Category",
      description:
        "Whether your startup focuses on tech healthcare or education or any other domain, we welcome all ideas.",
      image: "/Participation Categories - Open.png",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-[#FFF5EA]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-10">
          <p className="text-gray-600 mb-4">// Participation Categories //</p>
          <h2 className="text-6xl font-bold">
            We <span className="text-orange-400">Invite</span> You.
          </h2>
          <p className="text-gray-700 mt-4 text-md">
            We’re seeking those with daring ideas and the drive to make an
            impact on the world stage
          </p>
        </div>

        <div className="flex flex-wrap gap-15 justify-center">
          {areas.map((area, index) => (
            <Card
              key={index}
              className="border-none w-85 bg-[#FFF5EA] shadow-none overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="h-75 w-85 relative">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-4xl font-medium mb-2">{area.title}</h3>
                  <p className="text-gray-500">{area.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
