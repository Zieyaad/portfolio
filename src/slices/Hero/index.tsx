import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@/ui/RichText";
import { Heading } from "@/ui/Heading";
import clsx from "clsx";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const hasImage = slice.primary.image && slice.primary.image.url;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        {isFilled.richText(slice.primary.heading) && (
          <PrismicRichText
            field={slice.primary.heading}
            components={RichText}
          />
        )}

        <div className="grid grid-cols-24 mt-20 md:mt-32">
          {isFilled.image(slice.primary.image) && (
            <div className="relative col-span-24 md:col-span-9 lg:col-span-6 lg:col-start-4 bg-leather pt-20 rounded-t-[60px] md:rounded-t-full h-96">
              <PrismicNextImage
                field={slice.primary.image}
                width={523}
                height={477}
                className="absolute w-full h-full bottom-0 object-center object-cover"
              />
            </div>
          )}
          <div
            className={clsx(
              "flex flex-col gap-6",
              !hasImage
                ? "text-center col-span-24 -mt-6 lg:col-span-12 lg:col-start-7"
                : "mt-14 col-span-24 md:col-span-14 md:col-start-12 ",
            )}
          >
            {isFilled.richText(slice.primary.body) && (
              <PrismicRichText
                field={slice.primary.body}
                components={RichText}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
