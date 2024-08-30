import { TitleDescriptionType } from "@/lib/sanity/types";
import { Fragment } from "react";

const TitleDescription: React.FC<{ block?: TitleDescriptionType }> = ({
  block,
}) => {
  const { description, title } = block || {};
  return (
    <Fragment>
      <div className="pb-6">
        <h6 className=" text-[1.1rem] md:text-[1.25rem]  font-DM font-medium text-dark-pink tracking-[0.01em] mb-2">
          {title}
        </h6>
        <p className="text-dark-blue opacity-70  text-[1rem] md:text-[1.1rem]  font-normal tracking-[0.01em] leading-[1.5em] md:leading-[1.7em]  font-Inter p-0 m-0 ">
          {description}
        </p>
      </div>
    </Fragment>
  );
};
export default TitleDescription;
