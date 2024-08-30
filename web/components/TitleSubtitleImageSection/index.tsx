import clsx from "clsx";
import { TitleSubtitleImageSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("@/components/RichText"));
const CustomImage = dynamic(() => import("@/components/CustomImage"));
const TitleSubtitle = dynamic(() => import("@/components/TitleSubtitle"));

const TitleSubtitleImageSection: React.FC<TitleSubtitleImageSectionType> = (
  props
) => {
  const { img, title_subtitle, section_theme, content } = props || {};

  return (
    <div className={clsx("px-0 py-0", section_theme ?? "bg-white")}>
      <div className="container">
        {title_subtitle && <TitleSubtitle block={title_subtitle} />}
        <div
          className="mt-12
                [&>img]:max-h-[24em] [&>img]:block [&>img]:mx-auto [&>img]:my-8
                "
        >
          {img && <CustomImage block={img} />}
        </div>
        <div>
          {content && (
            <ul className="block max-w-[84em] xl:max-w-[73em] w-full mx-auto my-0 pl-8">
              <li
                className="list-disc mt-6 mx-0 my-4 font-DM
                            [&>ul]:block
                            [&>ul]:mt-12
                            [&>ul>li]:text-base xl:[&>ul>li]:text-lg [&>ul>li]:leading-[1.5em] [&>ul>li]:list-disc [&>ul>li]:mt-6 [&>ul>li]:mx-0 [&>ul>li]:mb-4  [&>ul>li]:text-dark-blue
                            [&>ul>li>span]:text-dark-pink [&>ul>li>span]:font-semibold
                            "
              >
                <RichText block={content} />
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default TitleSubtitleImageSection;
