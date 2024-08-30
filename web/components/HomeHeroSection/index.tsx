import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import CustomImage from "../CustomImage";
import { HomeheroSectionType } from "@/lib/sanity/types/page";
const Hero: React.FC<HomeheroSectionType> = (sectionProps) => {
  const {
    bottom_description,
    hero_description,
    hero_image,
    hero_title,
    jamstack_developer_button,
    start_project_button,
    title,
    title_image,
    section_theme,
  } = sectionProps || {};
  const [showAnimation, setShowAnimation] = useState(false)
  useEffect(()=>{
    const timeout = setTimeout(()=>{setShowAnimation(true)}, 10000)
    return () => {
      clearTimeout(timeout)
    }
  },[])
  return (
    <div
      className={clsx(
        "bg-hero-gradient  bg-heroBgsize",
        section_theme ?? "bg-white",
        showAnimation && "animate-gradient"
      )}
    >
      <div className="container">
        <div className="flex justify-between items-center pt-[12em] em:pt-[11em] pb-0 px-0">
          <div className="w-full xlg:w-3/5">
            <div className="relative banner-text-content text-center em:text-left">
              <div className="items-center  flex-col-reverse xl:flex-row justify-start">
                <h1 className="inline-block text-[23px] esm:text-[28.35px]  md:text-[36px] emd:text-[40.25px] lg:text-[46px] font-bold leading-[1.25em] max-w-full em:max-w-xs sm:max-w-[23rem] md:max-w-md emd:max-w-[30rem] lg:max-w-lg text-title-blue-shade mb-5 font-DM">
                  {hero_title}
                </h1>
                {title_image && (
                  <div
                    className="max-w-[7.25em] 2xl:max-w-[unset] mb-4 ml-0 xl:ml-[15px] inline-flex relative lg:mt-[-1.5rem] before:bg-arrowSizeRespon vem:before:bg-arrowSize
                    before:content-none  em:before:content-[''] before:bg-none before:bg-[url(/Arrow.svg)] before:bg-no-repeat before:w-6 before:2xl:w-8 before:h-[1.1em] before:xl:h-[1.5em] before:absolute  [&>img]:max-w-[auto] sm:[&>img]:w-[8.5em] [&>img]:w-full [&>img]:h-full [&>img]:animate-[rotations_30s_linear_infinite]  
                   before:top-[50%] em:before:top-[66%]  md:before:top-[58%] xl:before:top-[60%] 2xl:before:top-[62%] before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 [&>img]:relative [&>img]:top-0 em:[&>img]:top-4 md:[&>img]:top-2 2xl:[&>img]:top-4 [&>img]:hidden em:[&>img]:block"
                  >
                    <CustomImage
                      block={title_image}
                      height={180}
                      width={180}
                      priority
                    />
                  </div>
                )}
              </div>
              <p className="text-base emd:text-xl xl:text-[22px] font-normal leading-[1.5em] text-menu-title-text w-[90%] esm:w-4/5 em:w-full md:w-4/5 emd:w-full ml-auto em:ml-0 mr-auto">
                {hero_description}
              </p>
              <div className="banner-btn">
                <ul className="hover:[&>li>a]:text-white-color mt-4 block esm:flex justify-center em:justify-start">
                  <li className="secondary [&>a]:bg-dark-blue hover:[&>a]:bg-btn-hover-blue [&>a]:text-[12px] em:[&>a]:text-[15.75px] xl:[&>a]:text-[18px] mr-0 esm:mr-4 [&>a]:px-[25px] [&>a]:py-3 lg:[&>a]:px-[30px] sm:[&>a]:py-4 lg:[&>a]:py-5  [&>a]:font-medium">
                    {start_project_button && (
                      <Button block={start_project_button} />
                    )}
                  </li>
                  <li className="hover:[&>a]:bg-btn-hover-pink ml-0 mt-4 esm:mt-0 vsm:ml-4 [&>a]:text-[12px] em:[&>a]:text-[15.75px] xl:[&>a]:text-[18px] [&>a]:mt-[0] [&>a]:px-[25px] [&>a]:py-3 lg:[&>a]:px-[30px] sm:[&>a]:py-4 lg:[&>a]:py-5  [&>a]:font-medium">
                    {jamstack_developer_button && (
                      <Button block={jamstack_developer_button} />
                    )}
                  </li>
                </ul>
              </div>
              <div className="max-w-[150px] my-12 em:my-0 inline-flex relative before:bg-ResposivemiddleArrow w-full
                     before:content-['']  em:before:content-none before:bg-[url(/Arrow.svg)] em:before:bg-hidden before:bg-no-repeat before:w-[2.5em]  before:h-[2.1em] before:xl:h-[1.5em] before:absolute   [&>img]:w-full [&>img]:h-full [&>img]:animate-[rotations_30s_linear_infinite]
                   before:top-[53%]  before:left-[53%] before:-translate-x-2/4 before:-translate-y-2/4 [&>img]:relative  [&>img]:block em:[&>img]:hidden">
                   <CustomImage
                      block={title_image}
                      height={150}
                      width={150}
                      priority
                    />
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 hidden lg:block">
            {hero_image && (
              <div>
                <CustomImage block={hero_image} height={500} width={500} priority/>
              </div>
            )}
          </div>
        </div>
        <div className="max-w-4/5 esm:max-w-[70%] em:max-w-4/5 lg:max-w-[64%] text-center relative z-0 mt-0 em:mt-12 mb-0 mx-auto my-0 pb-12 pt-0 em:pt-12 sm:pt-16">
          <p className="text-sm em:text-base md:text-lg lg:text-xl !leading-[1.6em] font-normal text-dark-blue">
            {bottom_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
