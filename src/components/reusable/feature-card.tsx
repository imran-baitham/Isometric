import { Neuton_font } from "@/fonts";
import { FeatureProps } from "@/types";
import { classNames } from "@/utils";
import Image from "next/image";

export function FeatureCard({ featureImg, title, description }: FeatureProps) {
  return (
    <div className="relative overflow-hidden p-6 bg-brand-tertiary rounded-[20px] drop-shadow-sm">
      <div className="absolute right-0 top-0 h-16 w-16 bg-primary transform rotate-45 translate-x-8 -translate-y-8" />

      <div className="relative z-10 mb-6">
        <div className="bg-[#FFD700]/40 h-20 w-20 rounded-full flex items-center justify-center">
          <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center">
            <Image
              src={featureImg}
              alt={title}
              width={27}
              height={27}
              priority
            />
          </div>
        </div>
      </div>

      <h3
        className={classNames(
          "text-2xl md:text-[26px] font-serif font-bold mb-2 text-[#3A2E26] tracking-normal max-lg:leading-8",
          Neuton_font.className
        )}
      >
        {title}
      </h3>
      <p className="max-md:text-sm leading-relaxed text-balance">
        {description}
      </p>
    </div>
  );
}
