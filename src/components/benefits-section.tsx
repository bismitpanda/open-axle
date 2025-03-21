import Image from "next/image";

interface Benefit {
  title: string;
  highlighted: string;
  description: string;
  subtitle: string;
  image: string;
}

export default function BenefitsSection() {
  const benefits: Benefit[] = [
    {
      title: "Fuel to Your Vision",
      highlighted: "$10,000+",
      description: " in funding",
      subtitle: "Capital investment to transform your ideas into reality",
      image: "/Benefits - Fuel to Your Vision.png",
    },
    {
      title: "Navigation for Your Path",
      highlighted: "500+",
      description: " Expert Mentors",
      subtitle:
        "Benefit from expert mentorship and resources to steer your startup toward success.",
      image: "/Benefits - Navigation for Your Path.png",
    },
    {
      title: "Connecting Innovators",
      highlighted: "30,000+",
      description: " Strong Community",
      subtitle:
        "Join a vibrant community of problem-solvers to collaborate and grow together.",
      image: "/Benefits - Connecting Innovators.png",
    },
    {
      title: "Enterprise Grade AI",
      highlighted: "by Holbox AI",
      description: "",
      subtitle:
        "Enterprise grade Generative AI deployed on your cloud, by one of our partners.",
      image: "/Benefits - Enterprise Grade AI.png",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-10">
          <p className="text-gray-600 mb-4">// Benefits //</p>
          <h2 className="text-6xl font-bold">What you get.</h2>
          <p className="text-gray-700 mt-4 text-md">
            We’re seeking those with daring ideas and the drive to make an
            impact on the world stage
          </p>
        </div>

        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-6 md:gap-12`}
            >
              <div className="w-full md:w-1/3">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-6xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-4xl mb-5 font-bold">
                  <span className="text-orange-400 mb-2">
                    {benefit.highlighted}
                  </span>
                  {benefit.description}
                </p>
                <p className="text-gray-600">{benefit.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
