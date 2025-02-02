import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Form`.
 */
export type FormProps = SliceComponentProps<Content.FormSlice>;

/**
 * Component for "Form" Slices.
 */
const Form: FC<FormProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <form action="https://formspree.io/f/xeoeeggj" method="POST">
        <label>
          Your email:
          <input type="email" name="email" />
        </label>
        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Form;
