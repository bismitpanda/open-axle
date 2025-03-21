import { Marquee } from "./magicui/marquee";

export default function PromotionBanner() {
  return (
    // <div className="w-full bg-black text-white py-3 overflow-hidden">
    //   <div className="flex whitespace-nowrap animate-marquee">
    //     <span className="mx-4">Get a chance to win $100,000 in Funding</span>
    //     <span className="mx-4">Get a chance to win $100,000 in Funding</span>
    //     <span className="mx-4">Get a chance to win $100,000 in Funding</span>
    //     <span className="mx-4">Get a chance to win $100,000 in Funding</span>
    //   </div>
    // </div>

    <Marquee className="[--duration:20s]">
      <span className="mx-4">Get a chance to win $100,000 in Funding</span>
      <span className="mx-4">Get a chance to win $100,000 in Funding</span>
      <span className="mx-4">Get a chance to win $100,000 in Funding</span>
      <span className="mx-4">Get a chance to win $100,000 in Funding</span>
    </Marquee>
  );
}
