import { Button, Container } from "@/components";
import { Neuton_font } from "@/fonts";
import { classNames } from "@/utils";

export default function StartSection() {
  return (
    <div className="relative w-full overflow-hidden py-40 lg:py-64">
      <div className="absolute inset-0 w-[200%] h-full animate-cloud">
        <div className="absolute inset-0 w-full h-full bg-[url(/assets/hero-long.svg)] bg-repeat-x bg-center"></div>
        <div className="absolute inset-0 w-full h-full bg-[url(/assets/hero-long.svg)] bg-repeat-x bg-center translate-x-full"></div>
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
