import clsx from "clsx";

export type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = {
  as?: HeadingLevels;
  children?: React.ReactNode;
  className?: string;
};

export const Heading = ({ as = "h1", children, className }: HeadingProps) => {
  if (!children) {
    return null;
  }

  const headingFont = "font-acorn";

  const HeadingType: keyof JSX.IntrinsicElements = as;

  const headingSize = {
    h1: "text-accent text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl tracking-normal",
    h2: "text-accent text-center text-3xl sm:text-5xl md:text-6xl tracking-wide",
    h3: "text-accent text-left text-2xl sm:text-5xl tracking-wide leading-[1.2] sm:leading-[1.2]",
    h4: "text-text text-xl lg:text-2xl",
    h5: "text-text text-2xl",
    h6: "text-text text-base leading-5 lg:text-lg lg:leading-5",
  };

  const headingClassNames = headingSize[as];
  const componentStyles = clsx(headingClassNames, headingFont, className);

  if (!HeadingType || !headingClassNames) {
    return null;
  }

  return <HeadingType className={componentStyles}>{children}</HeadingType>;
};
