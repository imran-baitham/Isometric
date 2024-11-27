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
    <div className="relative overflow-hidden w-full h-auto mt-28 sm:mt-52">
      <div className="absolute left-0 right-0 top-0 w-full">
        <Image
          src={"/assets/hero.svg"}
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

            <div className="max-sm:hidden flex absolute top-0 left-0 w-full h-full justify-center items-center space-x-4 z-10">
              {!isPlaying && (
                <button onClick={handlePlay}>
                  <Image
                    src={"/assets/play.png"}
                    alt="cta image"
                    width={155}
                    height={155}
                    quality={30}
                    priority
                    className="group-hover:animate-pulse"
                  />
                </button>
              )}
              {isPlaying && (
                <button
                  onClick={handleStop}
                  className="md:group-hover:flex md:hidden"
                >
                  <Image
                    src={"/assets/stop.png"}
                    alt="cta image"
                    width={155}
                    height={155}
                    quality={30}
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
