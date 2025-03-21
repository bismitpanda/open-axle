import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "What is OpenAxle?",
      answer:
        "OpenAxle is a launchpad and funding platform that empowers emerging startups with the initial funding, mentorship, and resources they need to thrive. We’re passionate about driving innovation by supporting creators and entrepreneurs who are tackling meaningful challenges.",
    },
    {
      question: "Who can apply for OpenaAxle's incubator?",
      answer: "",
    },
    {
      question: "What types of startups does OpenAxle support?",
      answer: "",
    },
    {
      question: "Is funding available through OpenAxle Capital?",
      answer: "",
    },
    {
      question: "What’s the timeline for Incubatory'25 program?",
      answer: "",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-[#FFF5EA]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center px-6 mb-10">
          <p className="text-gray-600 mb-4">// Answers to your Questions //</p>
          <h2 className="text-6xl font-bold">FAQs</h2>
          <p className="text-gray-700 mt-4 text-lg">
            We’re seeking those with daring ideas and the drive to make an
            impact on the world stage
          </p>
        </div>

        <div className="mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-2 shadow-none"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                className="bg-white rounded-4xl px-10 py-4 border-none"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="text-left text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
