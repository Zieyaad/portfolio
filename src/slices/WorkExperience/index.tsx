import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `WorkExperience`.
 */
export type WorkExperienceProps =
  SliceComponentProps<Content.WorkExperienceSlice>;

/**
 * Component for "WorkExperience" Slices.
 */
const WorkExperience = ({ slice }: WorkExperienceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        <div className="grid we grid-cols-12 mt-32">
          {slice.primary.item.map((item) => (
            <div
              className="mt-5 rounded-3xl md:rounded-full bg-accent py-4 px-8 flex flex-col md:flex-row items-center col-span-full gap-2 md:gap-20 md:w-fit"
              key={item.employee}
            >
              <div className="flex flex-col text-center md:text-left gap-2 md:gap-1">
                {item.employee && (
                  <span className="text-paper dark:text-navy-800 text-xl font-bold">
                    {item.employee}
                  </span>
                )}
                {item.position && (
                  <span className="text-navy-300 dark:text-navy-800 text-lg">
                    {item.position}
                  </span>
                )}
              </div>
              <div>
                {item.duration && (
                  <span className="font-acorn text-paper dark:text-navy-800 text-3xl">
                    {item.duration}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
