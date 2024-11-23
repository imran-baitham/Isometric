"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Container from "../reusable/container";
import Button from "./button";
import { classNames, NavData } from "@/utils";
import { Jost_font } from "@/fonts";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-2 sm:top-8 left-0 right-0 z-40 max-md:px-2">
      <Container className="bg-brand-tertiary rounded-2xl sm:rounded-[20px] drop-shadow-sm">
        <div className="flex justify-between h-16 sm:h-[5.5rem] sm:px-5">
          <div className="flex items-center justify-between w-full">
            <div className="w-[100px] h-[35px] sm:w-[140px] sm:h-[45px]">
              <Image
                src={"/assets/logo.png"}
                alt="background"
                layout="responsive"
                width={144}
                height={49}
                priority
              />
            </div>
            <div className="mr-2 flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 rounded-full w-full">
            {NavData.map((item, index) => (
              <li key={index} className="flex items-center">
                <Link
                  href={item.slug}
                  className={classNames(
                    "text-xl font-medium hover:text-gray-600 transition-colors",
                    Jost_font.className
                  )}
                >
                  {item.name}
                </Link>
                {index - 3 ? (
                  <span className="ml-6 w-2 h-2 rounded-full bg-[#909A3A]" />
                ) : null}
              </li>
            ))}
          </nav>
          <div className="hidden lg:flex items-center justify-end w-full">
            <Button startIcon>Start Focusing</Button>
          </div>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:hidden border-t-2`}>
          <div className="grid grid-cols-1 gap-3 px-2 py-4">
            {NavData.map((item, index) => (
              <Link
                key={index}
                href={item.slug}
                className={classNames(
                  "text-xl font-medium transition-colors block",
                  Jost_font.className
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
