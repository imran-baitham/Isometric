import React from "react";
import type { ReactNode } from "react";
import { classNames } from "@/utils";

interface ContainerProps {
  id?: string;
  size?: "sm" | "lg" | "full";
  className?: string;
  children?: ReactNode;
}

const styles = {
  sm: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12",
  lg: "mx-auto w-full px-[1rem] md:px-0 md:max-w-[768px] lg:max-w-[1192px]",
  full: "w-full px-[1rem]",
};

const Container: React.FC<ContainerProps> = ({
  id,
  size = "lg",
  className = "",
  children,
  ...props
}) => {
  return (
    <section className={classNames(styles[size], className)} {...props} id={id}>
      {children}
    </section>
  );
};

export default Container;
