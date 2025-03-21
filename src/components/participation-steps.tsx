import { Card, CardContent } from "@/components/ui/card";

interface Step {
  number: number;
  title: string;
  description: string;
}

export default function ParticipationSteps() {
  const steps: Step[] = [
    {
      number: 1,
      title: "Submit Your Idea",
      description:
        "Fill out the application with your idea and the problem it aims to solve. We want to know what makes your startup unique and how it can make an impact. Share your vision, the story behind it, and why it’s worth pursuing. This is the first step on your journey with us!",
    },
    {
      number: 2,
      title: "Selection & Initial Pitch Round",
      description:
        "Our team will review each application carefully, selecting startups that align with our mission to solve real-world problems. If you’re chosen, you’ll receive an invitation to pitch your concept. This is your chance to showcase your vision and passion, bring your A-game!",
    },
    {
      number: 3,
      title: "Finalist Round / Virtual Pitch",
      description:
        "You’ll pitch your startup virtually to our panel. This is a crucial stage where we assess your vision, strategy, and readiness to make an impact. It's all about how well you can present and defend your idea. The startups that excel here will move forward to Pitch Day.",
    },
    {
      number: 4,
      title: "Funding & Partnership",
      description:
        "Fill out the application with your idea and the problem it aims to solve. We want to know what makes your startup unique and how it can make an impact. Share your vision, the story behind it, and why it’s worth pursuing. This is the first step on your journey with us!",
    },
    {
      number: 5,
      title: "Pitch Day",
      description:
        "Fill out the application with your idea and the problem it aims to solve. We want to know what makes your startup unique and how it can make an impact. Share your vision, the story behind it, and why it’s worth pursuing. This is the first step on your journey with us!",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center px-6 mb-10">
          <p className="text-gray-600">// The Process //</p>
          <h2 className="text-6xl font-medium">Participate Easily.</h2>
          <p className="text-gray-700 mt-4 text-lg">
            We’re seeking those with daring ideas and the drive to make an
            impact on the world stage
          </p>
        </div>
      </div>

      <Card className="bg-orange-50 rounded-none shadow-none border-none">
        <CardContent className="p-8">
          <div className="flex flex-col space-y-24">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-26">
                <div className="shrink-0">
                  <div className="w-30 h-30 rounded-full bg-orange-400 text-6xl text-white flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-2xl mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
