import { BackgroundEffects } from "@/components/landing/BackgroundEffects";
import Popups from "@/components/popup/popup";
import { HeroSection2 } from "@/components/landing/HeroSection2";
import { QuoteSection } from "@/components/landing/QuoteSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { IntegrationsSection } from "@/components/landing/IntegrationsSection";
import { CtaFooter } from "@/components/landing/CtaFooter";
import Testimonial from "@/components/landing/Testimonial";
import SuccessStories from "@/components/landing/SuccessStories";
import FaqSection from "@/components/landing/FaqSection";
import { ServicesSection2 } from "@/components/landing/ServicesSection2";
import { ServicesSection3 } from "@/components/landing/ServicesSection3";
import { ProductSection } from "@/components/landing/Product";
import FaqSection2 from "@/components/landing/FaqSection2";
import { ProcessSection2 } from "@/components/landing/ProcessSection2";
import { WhyUsSection } from "@/components/landing/Whyus";
import Footer2 from "@/components/landing/footer2";
import { MobileHoverObserver } from "@/components/landing/MobileHoverObserver";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#f5f5f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 overflow-hidden transition-colors duration-200">

      {/* <HeroSection /> */}
      <HeroSection2 />
      {/* <QuoteSection />
      <BenefitsSection /> 
      <ServicesSection />
      <FeaturesSection />
      <ProcessSection />
      <IntegrationsSection />
      <Testimonial />
      <SuccessStories />
      <FaqSection />
      <CtaFooter />
      <FooterBar /> */}
      <ServicesSection2 />
      <ServicesSection3 />
      <ProductSection />
      <ProcessSection2 />
      <WhyUsSection />
      <FaqSection2 />
      <Footer2 />
      <Popups />
      <MobileHoverObserver />
    </div>
  );
}
