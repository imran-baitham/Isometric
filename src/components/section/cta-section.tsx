import { Container } from "@/components";
import { Neuton_font } from "@/fonts";
import { TCtaSection } from "@/types";
import { classNames } from "@/utils";
import { CtaCard } from "../reusable/cta-card";

export const ctaSections: TCtaSection[] = [
  {
    id: 0,
    title: "Earn while you Focus",
    ctaImage: "/elf_shadows-720p.mp4",
    description:
      "Transform your work time into rewards with CityFocus. Each focused session earns you coins to build, expand, and beautify your city, linking your productivity directly to exciting outcomes that fuel your enthusiasm and ambition.",
    imagePosition: "left",
  },
  {
    id: 1,
    title: "Watch your City Grow",
    ctaImage: "/elf_shadows-720p.mp4",
    description:
      "See the impact of your focus as your isometric city enhances and evolves. The more you stay on task, the more vibrant and detailed your city becomes, providing a clear visual of your progress.",
    imagePosition: "right",
  },
  {
    id: 2,
    title: "Connect and Compete",
    ctaImage: "/elf_shadows-720p.mp4",
    description:
      "Share your city with friends and engage in a community of achievers. Comparing your progress and supporting each other creates a goal-oriented, motivating network.",
    imagePosition: "left",
  },
  {
    id: 3,
    title: "Gamify Distraction",
    ctaImage: "/elf_shadows-720p.mp4",
    description:
      "Break tasks into chunks and stay sharp with a gamified approach. CityFocus helps you manage distractions effectively by turning time management into an engaging, interactive experience.",
    imagePosition: "right",
  },
];

export default function CTASection() {
  return (
    <div className="relative w-full bg-[url(/assets/bg-cta.svg)] bg-no-repeat bg-top">
      <Container className="relative">
        <>
          <h1
            className={classNames(
              "text-4xl md:text-6xl font-extrabold tracking-tight text-secondary text-center text-balance",
              Neuton_font.className
            )}
          >
            What makes CityFocus a <br className="max-md:hidden" />
            <span className="text-tertiary">Productivity Powerhouse</span>?
          </h1>
          <div className="grid gap-6 md:gap-12 w-full items-center py-10 sm:py-20">
            {ctaSections.map((section, index) => (
              <div key={index} className="relative">
                <div className="bg-brand-effect rounded-[30px] p-20 absolute w-full h-full translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3" />
                <CtaCard key={index} {...section} />
              </div>
            ))}
          </div>
        </>
      </Container>
    </div>
  );
}
