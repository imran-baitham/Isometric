import {
  CTASection,
  Footer,
  HeadSection,
  HeroSection,
  StartSection,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <HeadSection />
      <CTASection />
      <StartSection />
      <Footer />
    </main>
  );
}
