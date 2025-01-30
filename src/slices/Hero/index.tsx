import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@/ui/RichText";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {isFilled.richText(slice.primary.heading) && (
        <PrismicRichText field={slice.primary.heading} components={RichText} />
      )}
      <PrismicNextImage field={slice.primary.image} />
      <PrismicRichText field={slice.primary.body} components={RichText} />
    </section>
  );
};

export default Hero;
