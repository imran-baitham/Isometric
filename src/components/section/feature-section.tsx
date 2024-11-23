import React from "react";
import Container from "../reusable/container";
import Image from "next/image";
import Button from "../common/button";
import { classNames } from "@/utils";
import { Neuton_font } from "@/fonts";
import { FeatureProps } from "@/types";
import { FeatureCard } from "../reusable/feature-card";

const features: FeatureProps[] = [
  {
    featureImg: "/assets/svg/time.svg",
    title: "Set Your Focus Timer",
    description:
      "Choose your task and set a focus timer using the Pomodoro technique. Whether it's 25 minutes or an hour, the clock is your tool for deep, distraction-free work.",
  },
  {
    featureImg: "/assets/svg/earn.svg",
    title: "Earn Coins for Every Minute",
    description:
      "As you stay committed, you earn coins that reflect your commitment. The longer you focus, the more coins you collect, converting your time into tangible rewards.",
  },
  {
    featureImg: "/assets/svg/build.svg",
    title: "Build and Upgrade Your City",
    description:
      "Use your earned coins to construct a dynamic isometric city. From buildings to playgrounds, every addition showcases your attention, making your efforts a visually immersive and enjoy",
  },
];

function FeatureSection() {
  return (
    <Container className="py-10 sm:mb-14">
      <div>
        <div className="max-sm:flex max-sm:flex-col-reverse md:grid md:grid-cols-5 gap-8 items-center w-full">
          <div className="flex flex-col gap-8 md:col-span-2">
            <h2
              className={classNames(
                "text-2xl md:text-4xl font-extrabold tracking-wide text-secondary",
                Neuton_font.className
              )}
            >
              CityFocus
            </h2>
            <p className="text-sm max-md:leading-6 md:text-[16px] md:leading-6 lg:leading-8 tracking-wide text-pretty">
              CityFocus is a next-gen web app designed to revolutionize the way
              you work. By seamlessly blending productivity with gamification,
              CityFocus turns every focused minute into an opportunity to build
              and expand your own digital city.
            </p>
            <Button startIcon>Start Focusing</Button>
          </div>
          <div className="md:col-span-3">
            <Image
              src={"/assets/Margin.png"}
              alt="background"
              width={683}
              height={450}
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-sm:gap-4 gap-3 lg:gap-6 my-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              featureImg={feature.featureImg}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default FeatureSection;
