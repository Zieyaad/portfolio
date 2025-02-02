import type { JSXMapSerializer } from "@prismicio/react";
import { Heading } from "./Heading";

export const RichText: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="text-text text-base md:text-lg lg:text-xl leading-normal md:leading-relaxed tracking-widest mb-5 last-of-type:mb-0">
      {children}
    </p>
  ),
  heading1: ({ children }) => (
    <Heading as="h1" className="mb-5">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" className="mb-5">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" className="mb-4">
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as="h4" className="mb-4">
      {children}
    </Heading>
  ),
  heading5: ({ children }) => (
    <Heading as="h5" className="mb-3">
      {children}
    </Heading>
  ),
  heading6: ({ children }) => (
    <Heading as="h6" className="mb-3">
      {children}
    </Heading>
  ),
};
