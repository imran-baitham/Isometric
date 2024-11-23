import Image from "next/image";
import { Button, Container } from "@/components";
import { Neuton_font } from "@/fonts";
import { classNames } from "@/utils";

export default function StartSection() {
  return (
    <div
      className={`relative overflow-hidden h-[60vh] md:h-[50vh] lg:h-[60vh] xl:h-[90vh] w-full`}
    >
      <div className="absolute left-0 top-0 w-full">
        <Image
          src={"/assets/bg-last.png"}
          alt="background"
          width={720}
          height={420}
          layout="responsive"
          priority
        />
      </div>
      <Container className="relative flex items-center justify-center h-full">
        <div>
          <h1
            className={classNames(
              "text-3xl md:text-6xl font-extrabold tracking-wide text-secondary text-center text-balance",
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
