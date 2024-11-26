"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Neuton_font } from "@/fonts";
import { TCtaSection } from "@/types";
import { classNames } from "@/utils";

export function CtaCard({
  title,
  description,
  imagePosition,
  ctaImage,
}: TCtaSection) {
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

  const content = (
    <div className="flex flex-col justify-center space-y-3 md:space-y-4 max-w-xl">
      <h2
        className={classNames(
          "text-2xl md:text-4xl font-extrabold tracking-tight text-secondary",
          Neuton_font.className
        )}
      >
        {title}
      </h2>
      <p className="text-sm max-md:leading-6 md:text-[16px] md:leading-[28px] tracking-wide text-pretty">
        {description}
      </p>
    </div>
  );

  return (
    <div className="grid gap-4 sm:gap-12 lg:grid-cols-2 lg:gap-20 items-center bg-brand-tertiary rounded-[30px] p-5 md:p-16 relative">
      {imagePosition === "left" ? (
        <>
          <div className="w-full relative">
            <div className="bg-secondary rounded-[18px] absolute h-[200px] w-full md:h-[340px] md:w-[506px] translate-y-2 -translate-x-2" />
            <div className="group relative h-[200px] w-full md:h-[340px] md:w-[506px] cursor-pointer rounded-[18px] border-2 border-black overflow-hidden">
              <div className="max-sm:hidden flex absolute top-0 left-0 w-full h-full justify-center items-center space-x-4 z-10">
                {!isPlaying && (
                  <button onClick={handlePlay}>
                    <Image
                      src={"/assets/svg/play.svg"}
                      alt="play video"
                      width={70}
                      height={70}
                      loading="lazy"
                    />
                  </button>
                )}
                {isPlaying && (
                  <button
                    onClick={handleStop}
                    className="md:group-hover:flex md:hidden"
                  >
                    <Image
                      src={"/assets/svg/pause.svg"}
                      alt="play video"
                      width={70}
                      height={70}
                      loading="lazy"
                    />
                  </button>
                )}
              </div>
              <video
                ref={videoRef}
                src={ctaImage}
                controls
                width="506"
                height="340"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {content}
        </>
      ) : (
        <>
          {content}
          <div className="w-full relative">
            <div className="bg-secondary rounded-[18px] absolute h-[200px] w-full md:h-[340px] md:w-[506px] translate-y-2 -translate-x-2" />
            <div className="group relative h-[200px] w-full md:h-[340px] md:w-[506px] cursor-pointer rounded-[18px] border-2 border-black overflow-hidden">
              <div className="flex absolute top-0 left-0 w-full h-full justify-center items-center space-x-4 z-10">
                {!isPlaying && (
                  <button onClick={handlePlay}>
                    <Image
                      src={"/assets/svg/play.svg"}
                      alt="play video"
                      width={70}
                      height={70}
                      loading="lazy"
                    />
                  </button>
                )}
                {isPlaying && (
                  <button
                    onClick={handleStop}
                    className="md:group-hover:flex md:hidden"
                  >
                    <Image
                      src={"/assets/svg/pause.svg"}
                      alt="play video"
                      width={70}
                      height={70}
                      loading="lazy"
                    />
                  </button>
                )}
              </div>
              <video
                ref={videoRef}
                src={ctaImage}
                controls
                width="516"
                height="354"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
