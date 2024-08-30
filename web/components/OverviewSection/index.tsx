import { OverviewSectionType } from "@/lib/sanity/types/page";
import CustomImage from "../CustomImage";
import TitleDescription from "../ImageSideBySideTitleDescriptionArraySection/TitleDescription";
import TitleSubtitle from "../TitleSubtitle";

const OverviewSection: React.FC<OverviewSectionType> = (block) => {
  const { technology_icon, feature_image, title_subtitle, section_title } =
    block || {};
  return (
    <div className="mt-4 em:mt-12 mb-20 sm:mb-32">
      <div className="container">
        {title_subtitle && <TitleSubtitle block={title_subtitle} />}

        <div className="block emd:flex justify-between items-center mt-4 em:mt-8 pt-8 em:pt-12 pb-4 em:pb-8 emd:pb-12 px-4 em:px-8 bg-white-shad-color rounded-[0.625em] font-DM">
          <div className="w-full emd:w-[54%]  [&>img]:max-w-full [&>img]:object-fill">
            {feature_image?.map((image, index) => {
              return <CustomImage block={image} key={index} />;
            })}
          </div>
          <div className="w-full emd:w-[44%] pl-2 [&>div>h6]:text-[23.625px] sm:[&>div>h6]:text-[26.25px]  xl:[&>div>h6]:text-[30px] [&>div>h6]:text-dark-pink [&>div>h6]:font-bold [&>div>h6]:mb-4 [&>div>p]:text-[15.75px] sm:[&>div>p]:text-[17.5px] xl:[&>div>p]:text-[20px] [&>div>p]:text-black-color [&>div>p]:font-normal [&>div>p]:font-DM [&>div>p]:leading-[1.5em] [&>div>p]:opacity-100 mt-8 em:mt-12 emd:mt-0">
            {section_title && <TitleDescription block={section_title} />}
            <div className=" flex justify-around my-8 [&>img]:max-w-[3em] em:[&>img]:max-w-[4em]">
              {technology_icon?.map((image, index) => {
                return <CustomImage block={image} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OverviewSection;
