import clsx from "clsx";
import { Fragment } from "react";
import TitleSubtitle from "../TitleSubtitle";
import CustomImage from "../CustomImage";
import { OurProcessSectionType } from "@/lib/sanity/types/page";

const OurProcessSection: React.FC<
  OurProcessSectionType & { className?: string }
> = ({
  title_subtitle,
  image_title_array,
  section_theme,
  variant,
  className,
}) => {
  return (
    <Fragment>
      <div
        className={clsx(
          "py-10 sm:py-20",
          section_theme ?? "bg-white",
          variant ?? "primary"
        )}
      >
        <div className="container">
          <div className="our-process-inner">
            {title_subtitle && <TitleSubtitle block={title_subtitle} />}
            <div
              className={clsx(
                "mt-[3.375em]",
                className ?? `col-${String(image_title_array?.length)}`
              )}
            >
              <ul
                className={clsx(
                  "grid  gap-y-12 gap-x-12 items-baseline after:[&>*:last-child>div>div]:w-[0vw]",
                  section_theme
                    ? " grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6"
                    : "grid grid-cols-1 em:grid-cols-2 md:grid-cols-3  lg:grid-cols-5"
                )}
              >
                {image_title_array?.map((item, index) => {
                  const { our_process_image, title } = item || {};
                  return (
                    <li
                      key={index}
                      className="mx-0 items-center [&>img]:max-w-[4em] sm:[&>img]:max-w-[5em] [&>img]:w-full text-center [&>img]:text-center [&>img]:mx-auto "
                    >
                      {our_process_image && (
                        <CustomImage block={our_process_image} />
                      )}
                      <div className="relative">
                        <div
                          className={clsx(
                            "text-center text-base text-white-color w-10 h-10 rounded-[50%] font-semibold bg-dark-blue flex justify-center items-center my-4 mx-auto shadow-process-work after:content-[''] after:bg-dark-blue after:w-0 lg:after:w-[13em]  xlg:after:w-[15em] after:h-[5px] after:absolute after:top-[50%] after:left-[35%] xl:after:left-[40%] after:z-[-1] after:translate-y-[-50%] font-DM",
                            section_theme ??
                              "after:w-[0em] after:content-[''] after:h-[0px] w-0 h-0 hidden"
                          )}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <h6
                        className={clsx(
                          "text-sm em:text-base xl:text-lg font-DM text-black-color font-medium capitalize leading-normal",
                          section_theme ?? "mt-4 leading-[1.125em]"
                        )}
                      >
                        {title}
                      </h6>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default OurProcessSection;
