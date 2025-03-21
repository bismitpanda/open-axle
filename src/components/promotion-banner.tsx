import { Marquee } from "./magicui/marquee";

export default function PromotionBanner() {
  return (
    <div className="w-full bg-black text-white text-5xl font-semibold py-3 overflow-hidden">
      <Marquee className="[--duration:30s]">
        <span className="mx-6">
          Get a chance to win <span className="text-[#F28304]">$100,000</span>{" "}
          in Funding
        </span>
        <span className="mx-4">
          Get a chance to win <span className="text-[#F28304]">$100,000</span>{" "}
          in Funding
        </span>
        <span className="mx-4">
          Get a chance to win <span className="text-[#F28304]">$100,000</span>{" "}
          in Funding
        </span>
        <span className="mx-4">
          Get a chance to win <span className="text-[#F28304]">$100,000</span>{" "}
          in Funding
        </span>
      </Marquee>
    </div>
  );
}
