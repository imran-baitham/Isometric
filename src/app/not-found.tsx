import Link from "next/link";
import { classNames } from "@/utils";
import { Container } from "@/components";

export default function NotFound() {
  return (
    <Container className="w-full h-screen flex items-center justify-center">
      <div>
        <p className={"font-extrabold text-4xl"}>404</p>
        <h1 className={classNames("mt-3 text-3xl uppercase")}>
          Page not found
        </h1>
        <p className="mb-3 mt-2 text-balance">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-5 flex items-center gap-3">
          <Link href={"/"}>
            <button className="px-3 py-1 font-bold capitalize rounded-lg bg-primary">
              <span>Go back home</span>
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
