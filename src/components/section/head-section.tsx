import { Button, Container } from "@/components";
import { Neuton_font } from "@/fonts";
import { classNames } from "@/utils";

export default function HeadSection() {
  return (
    <div className={`relative py-10 sm:py-28`}>
      <Container className="relative flex items-center justify-center h-full">
        <div>
          <h1
            className={classNames(
              "text-3xl md:text-6xl font-extrabold tracking-wide text-secondary text-center text-balance",
              Neuton_font.className
            )}
          >
            Ready to Gamify your way into{" "}
            <span className="text-tertiary">Peak Productivity</span>?
          </h1>
          <p className="text-balance max-w-6xl mx-auto text-center text-xs sm:text-lg tracking-wide py-4 md:py-5">
            {`In a world buzzing with distractions, it's easy to lose sight of
            your goals and fall short of your potential. Whether you're a
            student racing against the clock, a freelancer balancing multiple
            projects, or an entrepreneur shaping your vision, staying on track
            is key.`}
          </p>
          <p className="text-balance max-w-5xl mx-auto text-center text-sm md:text-xl italic tracking-wide font-semibold pb-6 md:pb-12">
            {`“But what if getting things done didn't have to be such a struggle? What if locking in your focus could actually be effortless?”`}
          </p>
          <Button center startIcon>
            Start Focusing
          </Button>
        </div>
      </Container>
    </div>
  );
}
