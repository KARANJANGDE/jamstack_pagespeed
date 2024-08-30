import { Fragment } from "react";
import clsx from "clsx";
import { TitleSubtitleType } from "@/lib/sanity/types";

const TitleSubtitle: React.FC<{
  block?: TitleSubtitleType;
  variant?: string;
}> = ({ block, variant }) => {
  const { sub_title, title, caption } = block || {};
  return (
    <Fragment>
      <div className="max-w-[850px] mt-0 ml-auto em:ml-0 mr-auto text-center em:text-left mb-[30px] md:mb-[50px]">
        {variant === "secondary" ? (
          <div>
            {title && title.length > 0 && (
              <h6 className="after:absolute after:bg-white-color after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em]  before:absolute before:bg-white-color before:w-[1.5em] before:h-[0.125em] before:left-[0.5em] before:top-[0.5em] font-medium leading-[1.25em] uppercase text-white-color  tracking-wider relative inline-block mb-4 px-12 py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-DM">
                {title}
              </h6>
            )}
          </div>
        ) : (
          <div>
            {title && title.length > 0 && (
              <p className="after:absolute after:bg-light-blue after:w-[1em] md:after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em] before:absolute before:bg-light-blue before:w-[1em] md:before:w-[1.5em] before:h-[0.125em] before:left-[0.5em] before:top-[0.5em] font-medium leading-[1.25em] uppercase text-light-blue  tracking-wider relative inline-block mb-4 px-8 md:px-12 py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-DM">
                {title}
              </p>
            )}
          </div>
        )}

        {variant === "secondary" ? (
          <p className="mt-2 xl:mt-4 text-[16px] xl:text-[18px] max-w-full ms:max-w-[85%] text-white-color font-medium font-DM ">
            {sub_title} {caption && <p>{caption}</p>}
          </p>
        ) : (
          <h5 className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-title-blue-shade">
            {sub_title}{" "}
            {caption && (
              <p
                className={clsx(
                  `text-base sm:text-lg xl:text-xl font-semibold text-dark-pink inline-block p-0 font-DM`
                )}
              >
                {caption}
              </p>
            )}
          </h5>
        )}
      </div>
    </Fragment>
  );
};
export default TitleSubtitle;
