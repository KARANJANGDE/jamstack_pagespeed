import { CaseStudyPreviewType } from "@/lib/sanity/types/page";

import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const Link = dynamic(() => import("../Link"));
const CustomImage = dynamic(() => import("../CustomImage"));
const CaseStudiesImageDescription: React.FC<{
  block: CaseStudyPreviewType;
}> = ({ block }) => {
  const { project_year, slug, project_overview, heroSectionPreviewImage } =
    block || {};
  const { image } = heroSectionPreviewImage || {};
  const { title, description } = project_overview || {};
  return (
    <div className="group">
      <div className="hidden md:block group-hover:hidden">
        <CustomImage block={image} />
      </div>
      <div className=" flex items-start justify-between h-full flex-col  md:hidden group-hover:flex   w-full rounded-[1em] shadow-lg py-12 sm:py-12 px-4 em:px-8  font-Inter text-center em:text-left gap-2">
        <div>
          <div className="text-lg leading-[1.5em] pb-2">
            {project_year}
          </div>
          <div className=" font-Montserrat text-[1.75em] font-semibold text-dark-pink pb-2">
            {title}
          </div>
          <div className=" [&>p]:text-dove-gray-color [&>p]:text-[15px] em:[&>p]:text-base xl:[&>p]:text-lg [&>p]:pb-2">
            {description && <RichText block={description} />}
          </div>
        </div>
        <div className="flex justify-center em:justify-end w-full  ">
          <Link
            to={`/case-studies/${slug?.current}`}
            className="text-base font-medium text-[#eff0f7] bg-dark-blue rounded-[0.5em] py-2 px-6 hover:bg-dark-pink hover:text-[#eff0f7] font-DM w-fit"
          >
            view case
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesImageDescription;
