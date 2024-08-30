import clsx from "clsx";
import { TextImageBlockType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("@/components/RichText"));
const CustomImage = dynamic(() => import("@/components/CustomImage"));
const TitleSubtitle = dynamic(() => import("@/components/TitleSubtitle"));

const TitleImageBlock: React.FC<{
  block: TextImageBlockType;
}> = ({ block }) => {
  const { content, section_title, image, variant } = block || {};
  return (
    <div
      className={clsx(
        "mt-12 md:mt-24 mb-8 sm:mb-12 md:mb-24",
        variant ?? "primary"
      )}
    >
      <div className="container ">
        <div className="">
          {section_title && <TitleSubtitle block={section_title} />}
          <div
            className={clsx(
              "mt-4 em:mt-12 items-center w-full mx-auto ",
              variant === "primary"
                ? "flex flex-col md:flex-row-reverse [&>div>p]:text-center em:[&>div>p]:text-left"
                : " flex flex-col md:flex-row [&>div>p]:text-center em:[&>div>p]:text-left"
            )}
          >
            <div
              className={clsx(
                "w-full em:w-[70%] sm:w-1/2 mb-8 sm:mb-12 md:mb-[0] [&>img]:max-w-[60%] [&>img]:mr-auto md:[&>img]:mr-0 [&>img]:ml-auto",
                variant === "primary"
                  ? "flex justify-center md:justify-end"
                  : " [&>img]:ml-auto md:[&>img]:ml-0 [&>img]:mr-auto"
              )}
            >
              {image && <CustomImage block={image} />}
            </div>
            <div className="w-full md:w-[70%] [&>ul]:font-DM [&>ul]:block [&>ul]:list-none em:[&>ul]:list-disc [&>ul>li]:text-menu-title-text  [&>ul>li]:mb-[0.625em] [&>ul>li]:text-[14.175px] sm:[&>ul>li]:text-[15.75px] xl:[&>ul>li]:text-[18px] [&>p]:text-[14.175px] sm:[&>p]:text-[15.75px] xl:[&>p]:text-[18px] [&>p]:font-DM [&>ul>li]:text-center em:[&>ul>li]:text-left">
              {content && <RichText block={content} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TitleImageBlock;
