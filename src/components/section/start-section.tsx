import { Button, Container } from "@/components";
import { Neuton_font } from "@/fonts";
import { classNames } from "@/utils";
import Image from "next/image";

export default function StartSection() {
  return (
    <div className="relative w-full overflow-hidden py-32 lg:py-64">
      <div className="absolute inset-0 w-[200%] h-full animate-cloud">
        <div className="absolute inset-0 w-full h-full bg-[url(/assets/hero-long.svg)] bg-repeat-x bg-center"></div>
        <div className="absolute inset-0 w-full h-full bg-[url(/assets/hero-long.svg)] bg-repeat-x bg-center translate-x-full"></div>
      </div>
      <div className="container relative mx-auto">
        <div className="absolute max-sm:-top-20 lg:-top-32 max-sm:-left-36 -left-48 lg:-left-64 xl:-left-20 h-[220px] w-[220px] lg:h-[350px] lg:w-[450px]">
          <Image
            src={"/assets/blocks/block-3.svg"}
            alt="block one"
            width={563}
            height={358}
            layout="responsive"
            loading="lazy"
          />
        </div>
        <div className="absolute max-sm:top-36 lg:top-16 max-sm:-right-36 -right-48 lg:-right-64 xl:-right-20 h-[220px] w-[220px] lg:h-[350px] lg:w-[450px]">
          <Image
            src={"/assets/blocks/block-4.svg"}
            alt="block one"
            width={563}
            height={358}
            layout="responsive"
            loading="lazy"
          />
        </div>
      </div>
      <Container className="relative flex items-center justify-center h-full">
        <div>
          <h1
            className={classNames(
              "text-4xl md:text-6xl font-extrabold tracking-tight text-secondary text-center text-balance",
              Neuton_font.className
            )}
          >
            <span className="text-tertiary">Free Forever</span>, Start Now!
          </h1>
          <p className="text-balance max-w-5xl text-center text-sm md:text-xl tracking-wide font-semibold py-4 md:py-8">
            Sign up for CityFocus now and step into a more <br /> high-achieving
            version of yourself.
          </p>
          <Button center startIcon>
            Start Focusing
          </Button>
        </div>
      </Container>
    </div>
  );
}
