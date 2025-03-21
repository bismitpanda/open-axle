import Hero from "@/components/hero";
import FeaturesGrid from "@/components/features-grid";
import BenefitsSection from "@/components/benefits-section";
import InvestmentAreas from "@/components/investment-areas";
import ParticipationSteps from "@/components/participation-steps";
import FAQ from "@/components/faq";
import CtaSection from "@/components/cta-section";
import PromotionBanner from "@/components/promotion-banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF5EA]">
      <Hero />
      <FeaturesGrid />
      <BenefitsSection />
      <PromotionBanner />
      <InvestmentAreas />
      <ParticipationSteps />
      <FAQ />
      <CtaSection />
    </main>
  );
}
