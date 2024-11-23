"use client";

import React from "react";
import { classNames } from "@/utils";
import { Inknut } from "@/fonts";
import Image from "next/image";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
  center?: boolean;
  startIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  full = false,
  center = false,
  startIcon = false,
  className = "",
  onClick,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={classNames(
        "bg-primary px-5 py-3 text-lg rounded-[12px]",
        "max-sm:text-[13px] text-[18px] font-bold",
        startIcon ? "flex items-center gap-2" : "",
        full ? "w-full" : "max-w-max",
        center ? "mx-auto" : "",
        className,
        Inknut.className
      )}
      {...props}
      onClick={handleClick}
    >
      {startIcon && (
        <Image
          src={"/assets/Icon.png"}
          alt="play icon"
          width={24}
          height={24}
        />
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
