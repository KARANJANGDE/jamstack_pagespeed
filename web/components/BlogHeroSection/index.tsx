import clsx from "clsx";
import dynamic from "next/dynamic";
const Link = dynamic(() => import("../Link"));
import dayjs from "dayjs";
import CustomImage from "../CustomImage";
import { BlogHeroSectionType } from "@/lib/sanity/types/page";
import locales from "@/lib/locales";

const BlogHeroSection: React.FC<BlogHeroSectionType> = ({
  hero_image,
  section_theme,
  most_recent_blog,
}) => {
  const { author, banner_desc, banner_title, publish_date, category, slug } =
    most_recent_blog || {};
  if (!most_recent_blog) {
    return null;
  }
  const { author_Name } = author || {};
  const convert_date = dayjs(publish_date).format("MMM DD, YYYY");
  const { title } = category || {};
  return (
    <div
      className={clsx(
        " bg-hire-remote-gradient pt-32 w-full mx-auto relative",
        section_theme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="py-8 block md:flex justify-between items-center  md:gap-[1.5rem] gap-0 ">
          <div className="w-full md:w-3/5 max-w-full md:max-w-[40em] z-0">
            <div>
              <h6 className="text-xs sm:text-sm xl:text-base  tracking-[3px] text-dark-blue mb-2 font-medium  font-Inter uppercase ">
                {title}
              </h6>
              <h1 className="text-[1.82rem]  md:text-[2.125rem] emd:text-[2.516rem] xl:text-[2.875rem] leading-[1.25em] text-dark-blue mb-2  font-semibold  font-DM">
                {banner_title}
              </h1>
            </div>
            <div className="flex font-DM">
              <p className="border-r-[0.0625em] border-dark-blue text-sm xl:text-base font-normal text-dark-gray-shade font-inter pr-3 pb-0">
                By <span className="text-dark-pink">{author_Name}</span>
              </p>
              <p className="text-dark-gray-shade text-sm xl:text-base px-3 pb-0 font-inter">
                {convert_date}
              </p>
            </div>
            <div className="font-Inter my-4 [&>a]:bg-dark-pink [&>a]:text-white-color [&>a]:inline-flex [&>a]:text-sm xl:[&>a]:text-base [&>a]:font-medium [&>a]:rounded-[5em] [&>a]:py-[0.6em] md:[&>a]:py-3  [&>a]:px-8 md:[&>a]:mt-[1.2em] hover:[&>a]:bg-dark-blue [&>a]:font-DM ">
              <p className="text-base md:text-lg font-normal text-dark-blue">
                {banner_desc?.substring(0, 200)}...
              </p>
              <Link
                to={
                  slug?.current?.startsWith("/blog/")
                    ? slug?.current
                    : "/blog/" + String(slug?.current)
                }
              >
                   {locales.en.READ_MORE}
              </Link>
            </div>
          </div>
          <div className="bloglisthero-right w-[70%] md:w-2/5 ml-auto mr-auto md:mr-0 flex justify-center md:justify-end z-0 [&>img]:max-w-[26.125em] [&>img]:max-h-[26.125em] mt-0">
            {hero_image && <CustomImage block={hero_image} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
