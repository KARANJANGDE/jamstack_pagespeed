import clsx from "clsx";
import dayjs from "dayjs";
import Link from "../Link";
import { BlogFeaturedPostSectionType } from "@/lib/sanity/types/page";
import locales from "@/lib/locales";
import BlogCard from "./BlogCard";
import CustomImage from "../CustomImage";
import { getBlogLink } from "@/lib/utils/link-utils";

const BlogFeaturedPostSection: React.FC<BlogFeaturedPostSectionType> = ({
  all_posts_section,
  featured_post_title,
  section_theme,
  all_Posts,
  featured_post,
}) => {
  const { author, banner_desc, banner_title, hero_image, publish_date, slug } =
    featured_post || {};
  const publishDate = dayjs(publish_date).format("MMM DD, YYYY");
  return (
    <div
      className={clsx(
        "pt-4 em:pt-8 md:pt-12 pb-12 md:pb-[4.5em]",
        section_theme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="block emd:flex justify-between font-DM">
          <div className="w-full emd:w-[45%] ">
            <h3 className=" text-[24px] em:text-[31.5px] xl:text-[36px] text-black-shade-color font-bold mb-2 sm:mb-4 leading-[1.5em] text-left font-DM tracking-[-2px]">
              {featured_post_title}
            </h3>
            <div className="p-4 em:p-8 border-[1px] border-dark-gray-shade2 [&>img]:w-full [&>a]:w-full">
              <Link to={slug ? getBlogLink(slug) : ""}>
                {hero_image && <CustomImage block={hero_image} />}
              </Link>

              <div className=" flex my-4">
                <p className="border-r-[1px] border-dark-gray-shade text-xs em:text-sm font-normal pr-3 font-Inter pb-0">
                  By{" "}
                  <span className="text-[#592ea9]">{author?.author_Name}</span>
                </p>
                <p className="text-xs em:text-sm font-normal px-3 font-Inter pb-0">
                  {publishDate}
                </p>
              </div>
              <div className="">
                <Link to={slug ? getBlogLink(slug) : ""}>
                  <h4 className="text-[16px] lsm:text-[18px] em:text-[21px] emd:text-[26.25px] xl:text-[30px] mb-2 text-black-color font-bold leading-[1.25em] font-DM">
                    {banner_title}
                  </h4>
                </Link>
                <p className="text-sm xl:text-base text-dark-gray-shade font-Inter font-normal pb-4">
                  {banner_desc?.substring(0, 200)}...
                </p>
              </div>
              <div className="">
                <Link
                  className="py-3 px-6 text-[12.25px] xl:text-[14px] font-medium text-white-color hover:text-white-color bg-dark-pink hover:bg-dark-blue  rounded-[3.5em] cursor-pointer "
                  to={slug ? getBlogLink(slug) : ""}
                >
                {locales.en.READ_MORE}
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full emd:w-1/2 pl-2 mt-8 md:mt-12 emd:mt-0">
            <div className=" flex items-center justify-between mb-4">
              <h3 className=" text-[24px] em:text-[31.5px] xl:text-[36px] text-black-shade-color font-bold leading-[1.5em] font-DM">
                {all_posts_section}
              </h3>
              <Link
                to="#all_blogs"
                className="text-sm lg:text-base font-normal leading-[28px] text-dark-pink hover:text-dark-blue font-Inter"
              >
                {" "}
                {locales.en.VIEW_ALL}{" "}
              </Link>
            </div>

            <ul className="block ">
              {all_Posts?.map((i, index) => (
                <BlogCard block={i} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogFeaturedPostSection;
