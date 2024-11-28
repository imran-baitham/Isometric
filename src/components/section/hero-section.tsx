"use client";

import Image from "next/image";
import { Button, Container } from "@/components";
import { Neuton_font } from "@/fonts";
import { classNames } from "@/utils";
import { useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full h-auto mt-28 sm:mt-52 overflow-hidden">
      <div className="absolute inset-0 w-[200%] h-full animate-cloud">
        <div className="absolute inset-0 w-full h-full bg-[url(/assets/hero-long.svg)] bg-repeat-x bg-center"></div>
        <div className="absolute inset-0 w-full h-full bg-[url(/assets/hero-long.svg)] bg-repeat-x bg-center translate-x-full"></div>
      </div>
      <div className="container relative mx-auto">
        <div className="absolute -left-12 sm:left-0 top-20 lg:top-16 h-[120px] w-[120px] lg:h-[340px] lg:w-[252px]">
          <Image
            src={"/assets/blocks/block-1.svg"}
            alt="block one"
            width={252}
            height={340}
            layout="responsive"
            loading="lazy"
          />
        </div>
        <div className="absolute -right-12 sm:right-0 top-52 lg:top-28 h-[120px] w-[120px] lg:h-[340px] lg:w-[252px]">
          <Image
            src={"/assets/blocks/block-2.svg"}
            alt="block two"
            width={252}
            height={340}
            layout="responsive"
            loading="lazy"
          />
        </div>
      </div>
      <Container className="relative">
        <>
          <div className="pb-28">
            <h1
              className={classNames(
                "text-5xl md:text-7xl font-extrabold tracking-tight text-secondary text-center text-balance",
                Neuton_font.className
              )}
            >
              Gamify Your Way Into
              <br className="max-sm:hidden" />
              <span className="text-tertiary"> Peak Productivity</span>
            </h1>
            <p className="text-balance max-w-5xl mx-auto text-center text-sm md:text-xl tracking-wide font-semibold py-4 mb-5">
              Build your city, build your focus—one task at a time
            </p>
            <Button center startIcon>
              Start Focusing
            </Button>
          </div>
          <div className="relative w-full h-auto group cursor-pointer overflow-hidden rounded-[24px] border-2 border-secondary">
            <video
              ref={videoRef}
              src={"/elf_shadows-720p.mp4"}
              loop
              width="506"
              height="340"
              className="w-full h-full object-cover"
            />

            <div className="flex absolute top-0 left-0 w-full h-full justify-center items-center z-10">
              {!isPlaying && (
                <button
                  onClick={handlePlay}
                  className="w-[90px] h-[90px] sm:w-[155px] sm:h-[155px]"
                >
                  <Image
                    src={"/assets/play.png"}
                    alt="cta image"
                    layout="responsive"
                    width={155}
                    height={155}
                    priority
                    className="group-hover:animate-pulse"
                  />
                </button>
              )}
              {isPlaying && (
                <button
                  onClick={handleStop}
                  className="group-hover:flex md:hidden sm:w-[155px] sm:h-[155px]"
                >
                  <Image
                    src={"/assets/stop.png"}
                    alt="cta image"
                    layout="responsive"
                    width={155}
                    height={155}
                    priority
                  />
                </button>
              )}
            </div>
          </div>
        </>
      </Container>
    </div>
  );
}
