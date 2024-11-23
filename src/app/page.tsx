import {
  CTASection,
  Footer,
  HeadSection,
  HeroSection,
  StartSection,
  FeatureSection,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <HeadSection />
      <FeatureSection />
      <CTASection />
      <StartSection />
      <Footer />
    </main>
  );
}
