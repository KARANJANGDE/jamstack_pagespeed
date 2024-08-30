import { ContactHeroSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));

const ContactHeroSection: React.FC<ContactHeroSectionType> = (block) => {
  const { title_subtitle, section_description } = block || {};
  const { sub_title } = title_subtitle || {};
  return (
      <div>
        <div className="container">
          <div className="pt-40 lg:pt-48 sm:pb-8 [&>p]:font-Mont [&>p]:font-normal [&>p]:opacity-70 [&>p]:text-[14.175px] lg:[&>p]:text-[15.75px] xl:[&>p]:text-[18px]">
            <h1 className="text-[4.5em] sm:text-[5.875em] lg:text-[6.5625em] xl:text-[7.5em] text-black-color font-Mont font-extrabold tracking-wide leading-tight">
              {sub_title}
            </h1>
            {section_description && <RichText block={section_description} />}
          </div>
        </div>
      </div>
  );
};

export default ContactHeroSection;
