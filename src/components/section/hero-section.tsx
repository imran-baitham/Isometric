import { Button, Container } from "@/components";
import { Neuton_font } from "@/fonts";
import { classNames } from "@/utils";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className={`relative overflow-hidden w-full h-auto mt-72`}>
      <div className="absolute left-0 right-0 top-0 w-full">
        <Image
          src={"/assets/bg-hero.png"}
          alt="background"
          width={720}
          height={720}
          layout="responsive"
          priority
        />
      </div>
      <Container className="relative">
        <>
          <div className="pb-28">
            <h1
              className={classNames(
                "text-3xl md:text-7xl font-extrabold tracking-wide text-secondary text-center text-balance",
                Neuton_font.className
              )}
            >
              Gamify Your Way Into
              <br className="max-sm:hidden" />
              <span className="text-tertiary">Peak Productivity</span>
            </h1>
            <p className="text-balance max-w-5xl mx-auto text-center text-sm md:text-xl tracking-wide font-semibold py-4 mb-5">
              Build your city, build your focus—one task at a time
            </p>
            <Button center startIcon>
              Start Focusing
            </Button>
          </div>
          <div className="relative w-full h-auto group cursor-pointer">
            <Image
              src={"/assets/hero-video.png"}
              alt="cta image"
              width={1180}
              height={671}
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/assets/play.png"}
                alt="cta image"
                width={155}
                height={155}
                loading="lazy"
                className="group-hover:animate-pulse"
              />
            </div>
          </div>
        </>
      </Container>
    </div>
  );
}
