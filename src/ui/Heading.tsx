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
    h1: "text-7xl",
    h2: "text-3xl lg:text-6xl",
    h3: "text-2xl lg:text-4xl",
    h4: "text-xl lg:text-2xl",
    h5: "text-2xl",
    h6: "text-base leading-5 lg:text-lg lg:leading-5",
  };

  const headingClassNames = headingSize[as];
  const componentStyles = clsx(headingClassNames, headingFont, className);

  if (!HeadingType || !headingClassNames) {
    return null;
  }

  return <HeadingType className={componentStyles}>{children}</HeadingType>;
};
