import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { CompareFrameworkSection } from "@/lib/sanity/types/page";
import locales from "@/lib/locales";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const Button = dynamic(() => import("../Button"));

const Frameworks: React.FC<{
  block: CompareFrameworkSection;
  isshow?: boolean;
  variant?:string
}> = ({ block, isshow ,variant}) => {
  const {
    button_label_compare,
    title_subtitle,
    content,
    type,
    section_theme,
    frameworks: all_frameworks,
  } = block || {};
  const filtered_frameworks = useMemo(
    () =>
      type?.slug?.current
        ? all_frameworks?.filter(
            (i) => i?.type?.type?.slug?.current == type.slug?.current
          )
        : all_frameworks,
    [type, all_frameworks]
  );
  const [frameworks, setFrameworks] = useState({
    framework1:
      filtered_frameworks && filtered_frameworks?.length > 0
        ? filtered_frameworks[0]?.slug?.current || ""
        : "",
    framework2:
      filtered_frameworks && filtered_frameworks?.length > 1
        ? filtered_frameworks[1]?.slug?.current || ""
        : "",
  });
 
  const { push } = useRouter();
  const optionsListFirst = useMemo(
    () =>
      (filtered_frameworks || []).filter(
        (i) =>
          frameworks.framework2 || frameworks.framework1 !== i.slug?.current
      ),
    [filtered_frameworks, frameworks]
  );
  const optionsListSecond = useMemo(
    () =>
      (filtered_frameworks || []).filter(
        (i) =>
          frameworks.framework1 || frameworks.framework2 !== i.slug?.current
      ),
    [filtered_frameworks, frameworks]
  );
  const idDisable = frameworks.framework1 === frameworks.framework2
  return (
    <div className={clsx("", section_theme ?? " bg-white")}>
      <div
        className={clsx(
          "",
          variant === "primary" ? "" : "bg-pageSpeedGradient rounded-lg mb-10",
          isshow
            ? "bg-compare-gradient p-4 esm:p-8 sm:p-14 mb-10 sm:mb-[50px] emd:mb-20"
            : "block emd:flex items-center justify-between px-6 em:px-12 py-12 font-DM"
        )}
      >
        <div className={clsx("", isshow ? "w-full" : "w-full emd:w-[30%]")}>  
          <div>
            <h1
              className={clsx(
                "",
                isshow
                  ? "text-lg esm:text-xl em:text-[22px] xl:text-2xl text-dark-blue font-DM font-bold "
                  : "text-xl font-bold leading-normal text-dark-pink font-DM"
              )}
            >
              {title_subtitle?.title}
            </h1>
            {content && (
              <div
                className={clsx(
                  "",
                  isshow
                    ? "font-DM [&>p]:text-sm xl:[&>p]:text-base [&>p]:text-dark-blue [&>p]:py-2 em:[&>p]:py-4"
                    : "[&>p]:text-base [&>p]:leading-[1.5em] [&>p]:font-normal [&>p]:text-black [&>p]:py-3 lg:[&>p]:py-4 "
                )}
              >
                <RichText block={content} />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
          {!filtered_frameworks || !(filtered_frameworks.length > 1) ? (
            <h6>{locales.en.SERVICE_UNAVAILABLE}</h6>
          ) : (
            <div className="max-w-full  w-full  max-auto">
              {isshow ? (
                <div>
                  <ul className="flex flex-wrap  my-6">
                    {filtered_frameworks &&
                      filtered_frameworks.map((i, index) => (
                        <li
                          className="mr-4 mb-4 bg-dark-pink rounded-[0.5em] py-2 em:py-[0.8em] px-4 em:px-6 text-[13px] xl:text-sm font-medium text-[#ffffffb3] font-DM"
                          key={index}
                        >
                          {i.name}
                        </li>
                      ))}
                  </ul>
                </div>
              ) : null}
              <div
                className={clsx(
                  "",
                  isshow
                    ? "p-6 em:p-8 mt-8 bg-compare-row-gradient rounded-[0.5em]"
                    : ""
                )}
              >
                {isshow ? (
                  <h6 className="text-white-color font-DM text-[15px] md:text-[17px] font-medium uppercase tracking-[0.416px] mb-4 text-center emd:text-left">
                    compare <span>{title_subtitle?.title}</span>
                  </h6>
                ) : null}
                <div
                  className={clsx(
                    "",
                    isshow
                      ? "flex flex-col md:flex-row items-center justify-center emd:justify-start [&>select]:w-[25em] md:[&>select]:w-52  [&>select]:bg-selectBgsize  [&>select]:bg-pos  [&>select]:bg-white  [&>select]:appearance-none   [&>select]:shadow-[0px_0px_10px_rgba(218,54,84,0.2)]  [&>select]:relative  [&>select]:bg-[url(/dropdown.png)]    [&>select]:bg-no-repeat  [&>select]:indent-px  [&>select]:pr-[2.5em]  [&>select]:rounded-[0.625em]  [&>select]:border-[none] [&>button]:rounded-[10px] [&>button]:bg-dark-blue hover:[&>button]:bg-dark-pink "
                      : "flex flex-col md:block items-center [&>select]:w-[25em] md:[&>select]:w-44 xl:[&>select]:w-52 [&>select]:bg-selectBgsize  [&>select]:bg-pos  [&>select]:bg-white  [&>select]:appearance-none   [&>select]:shadow-[0px_0px_10px_rgba(218,54,84,0.2)]  [&>select]:relative  [&>select]:bg-[url(/dropdown.png)]    [&>select]:bg-no-repeat  [&>select]:indent-px  [&>select]:pr-10  [&>select]:rounded-[0.625em]  [&>select]:border-[none] [&>button]:rounded-[10px] [&>button]:bg-dark-blue hover:[&>button]:bg-Cerise-red",
                     
                  )}
                >
                  <select
                    className="w-[25em] max-w-full bg-[rgba(0,0,0,0)] font-medium bg-white-shad-color font-DM text-dark-blue"
                    required
                    aria-label="State"
                    defaultValue={filtered_frameworks[0]?.slug?.current || ""}
                    onChange={(e) =>
                      setFrameworks((state) => ({
                        ...state,
                        framework1: e.target.value,
                      }))
                    }
                  >
                    {optionsListFirst.map((i, index) => (
                      <option value={i.slug?.current || ""} key={index}>
                        {i.name}
                      </option>
                    ))}
                  </select>
                  <span
                    className={clsx(
                      "",
                      isshow
                        ? "text-white-color font-DM text-sm md:text-base uppercase mx-0 md:mx-4 my-4 md:my-0"
                        : "text-xl font-bold leading-[3.5em] text-dark-pink uppercase mx-2 xlg:mx-4 my-0"
                    )}
                  >
                    {" "}
                    VS{" "}
                  </span>
                  <select
                    className="w-[25em] max-w-full  bg-[rgba(0,0,0,0)] font-medium bg-white-shad-color font-DM text-dark-blue"
                    required
                    aria-label="State"
                    defaultValue={filtered_frameworks[1]?.slug?.current || ""}
                    onChange={(e) =>
                      setFrameworks((state) => ({
                        ...state,
                        framework2: e.target.value,
                      }))
                    }
                  >
                    {optionsListSecond.map((i, index) => (
                      <option value={i.slug?.current || ""} key={index}>
                        {i.name}
                      </option>
                    ))}
                  </select>
                  <Button
                    onClick={() => {
                      if (frameworks.framework1 && frameworks.framework2) {
                        const path =
                          String(
                            frameworks.framework1
                              .replace("/frameworks/", "")
                              .replace("/", "")
                          ).toLowerCase() +
                          "-vs-" +
                          String(
                            frameworks.framework2
                              .replace("/frameworks/", "")
                              .replace("/", "")
                          ).toLowerCase();
                        push("/comparision/" + path);
                      }
                    }}
                    disabled={idDisable}
                    className={clsx(
                      "disabled:opacity-70 opacity-100 disabled:cursor-not-allowed ",
                      isshow
                        ? "mt-8 md:mt-0 ml-0 md:ml-8 py-[1.125em] px-6 !bg-white-color w-full em:w-60 !text-dark-pink hover:text-white-color hover:!bg-dark-blue text-sm xl:text-base font-medium "
                        : " block text-base !font-medium text-white text-center bg-dark-blue w-auto md:w-40 mt-8 md:mt-0 ml-0 md:ml-4 lg:ml-8 rounded-[0.625em] max-w-full",
                        idDisable ? "hover:!bg-dark-blue" : ""
                    )}
                  >
                    {button_label_compare ?? "Compare"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
