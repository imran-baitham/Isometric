import Image from "next/image";
import { Neuton_font } from "@/fonts";
import { TCtaSection } from "@/types";
import { classNames } from "@/utils";

export function CtaCard({
  title,
  description,
  imagePosition,
  ctaImage,
}: TCtaSection) {
  const content = (
    <div className="flex flex-col justify-center space-y-3 md:space-y-4 max-w-xl">
      <h2
        className={classNames(
          "text-2xl md:text-4xl font-extrabold tracking-wide text-secondary",
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
          <Image
            src={ctaImage}
            alt="cta image"
            width={516}
            height={354}
            loading="lazy"
            className="cursor-pointer"
          />
          {content}
        </>
      ) : (
        <>
          {content}
          <Image
            src={ctaImage}
            alt="cta image"
            width={516}
            height={354}
            loading="lazy"
            className="cursor-pointer"
          />
        </>
      )}
    </div>
  );
}
