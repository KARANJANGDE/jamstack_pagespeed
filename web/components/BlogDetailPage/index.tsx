import React from "react";
import dynamic from "next/dynamic";

const NewsLetterSection = dynamic(() => import("../NewsLetterSection"));
import BlogDetailPostCard from "./BlogDetailPostCardSection";
import JoinOurNewsLetter from "./JoinOurNewsLetter";
import ShareButtons from "../ShareButtons";
import dayjs from "dayjs";
import CustomImage from "../CustomImage";
import Button from "../Button";
import { BlogDetailPageType } from "@/lib/sanity/types/blog";
import RichText from "../RichText";
import SideContentTitle from "./SideContentTitle";

export interface BlogDetailPage {
  block?: BlogDetailPageType;
}
const BlogDetailPage: React.FC<BlogDetailPage> = ({ block }) => {
  const {
    banner_title,
    button,
    content,
    hero_image,
    publish_date,
    recommended_blog,
    author,
    news_letter_section,
    contant_card_title,
    blogSectionTitles,
    share_text,
    blog_detail_post_Card,
    join_our_news_letter,
  } = block || {};

  const { author_Image, author_Name } = author || {};
  const publishDate = dayjs(publish_date).format("MMM DD, YYYY");
  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="pt-24 sm:pt-32 md:pt-40 pb-0 md:pb-8">
      <div className="mb-12 sm:mb-20">
        <div className="container">
          <div className="block emd:flex justify-between mt-8 em:mt-12 mb-8 em:mb-12 lg:mb-[5.938em]">
            <div className=" w-full emd:w-3/5 max-w-full emd:max-w-[42em]">
              <div className=" flex items-center">
                <div className="w-14 h-14 rounded-full">
                  {author_Image && <CustomImage block={author_Image} />}
                </div>
                <div className=" ml-2">
                  <h6 className="text-base em:text-lg md:text-sm xl:text-[22px] text-dark-pink opacity-80 font-bold font-DM">
                    {author_Name}
                  </h6>
                  <p className="text-xs sm:text-sm font-normal text-dark-gray-shade1 p-0 font-Inter">
                    Posted on {publishDate}
                  </p>
                </div>
              </div>
              <div className=" mt-8">
                <h3 className="text-[21.25px] em:text-[29.75px] md:text-[42px]  text-dark-blue font-bold leading-[1.4] font-DM">
                  {banner_title}
                </h3>
              </div>
              <div className="mt-4 sm:mt-6 flex items-center [&>a]:bg-dark-blue [&>a]:text-white-color [&>a]:font-bold [&>a]:py-3 [&>a]:px-5 [&>a]:cursor-pointer hover:[&>a]:bg-dark-pink [&>a]:text-sm em:[&>a]:text-base emd:[&>a]:text-lg [&>a]:rounded-[5em] [&>a]:font-DM">
                {button && <Button block={button} />}
              </div>
            </div>
            <div className=" w-full emd:w-2/5 flex justify-center emd:justify-end [&>img]:max-w-full lg:[&>img]:max-w-[28.125em] [&>img]:max-h-[28.125em] [&>img]:object-contain pt-8 sm:pt-20 emd:pt-[0]">
              {hero_image && <CustomImage block={hero_image} />}
            </div>
          </div>
          <div className="block lg:grid grid-cols-[2fr_5fr] gap-x-[4.5em]">
            <div className="sticky self-start top-[0.5em] xl:top-[1.875em] hidden lg:block ">
              <SideContentTitle
                contant_card={contant_card_title}
                sideTitle={blogSectionTitles}
              />
              <ShareButtons url={url} section_title={share_text} />

              {join_our_news_letter && (
                <JoinOurNewsLetter block={join_our_news_letter} />
              )}
            </div>
            <div className="w-full pl-[0em] [&>div>h4]:font-DM [&>div>h4]:text-dark-blue  [&>div>h4]:text-[22px] sm:[&>div>h4]:text-[26px] xl:[&>div>h4]:text-[30px] [&>div>h4]:leading-[1.3em] [&>div>h4]:font-bold [&>div>h4]:mb-[0.5em] [&>div>p]:text-dark-gray-shade [&>div>p]:text-[16px] md:[&>div>p]:text-[18px] [&>div>p]:leading-[26px] esm:[&>div>p]:leading-[28px] [&>div>p]:pb-[0.5em]  md:[&>div>p]:pb-[1em] [&>div>p]:font-DM [&>div>p]:font-normal  [&>div>ul]:block [&>div>ul]:list-disc [&>div>ul]:text-dark-blue [&>div>ul]:pl-[1.5em] [&>div>ul]:pb-[0.5em] sm:[&>div>ul]:pb-[1em] [&>div>ul>li]:font-DM [&>div>ul>li]:text-base md:[&>div>ul>li]:text-lg [&>div>ul>li]:leading-[28px] em:[&>div>ul>li]:leading-[30px] md:[&>div>ul>li]:leading-[32px] [&>div>ul>li]:font-normal [&>div>ul>li]:text-dark-gray-shade [&>div>ul>li]:mb-[0.5em] [&>div>img]:my-[1em] [&>div>ul>li>strong]:text-[14px] em:[&>div>ul>li>strong]:text-[16px] md:[&>div>ul>li>strong]:text-[18px] [&>div>ul>li>strong]:leading-[20px] em:[&>div>ul>li>strong]:leading-[24px] sm:[&>div>ul>li>strong]:leading-[26px] md:[&>div>ul>li>strong]:leading-[32px] [&>div>h5>strong]:text-dark-blue [&>div>h5>strong]:text-[18px] esm:[&>div>h5>strong]:text-[19px] sm:[&>div>h5>strong]:text-[22px] xl:[&>div>h5>strong]:text-[24px] [&>div>h6>strong]:text-dark-blue [&>div>h6>strong]:text-[18px] esm:[&>div>h6>strong]:text-[19px] sm:[&>div>h6>strong]:text-[22px] xl:[&>div>h6>strong]:text-[24px] [&>div>h6>strong]:font-bold [&>div>h5>strong]:font-DM [&>div>h6>strong]:font-DM [&>div>h5]:font-DM [&>div>div.container]:!px-0 [&>div>div>div.container]:!px-0 [&>div.background-purple]:my-[40px] md:[&>div.background-purple]:my-[60px] md:[&>div>div.background-purple]:my-[60px] [&>div]:mb-4 [&>div>h5]:text-dark-blue [&>div>h5]:mb-2 [&>div>h5]:text-xl sm:[&>div>h5]:text-2xl [&>div>h5]:font-bold [&>div>div>div>div>img]:mb-4">
              {content?.custom_rich_text && <RichText block={content} />}
            </div>
          </div>
        </div>
      </div>
      <BlogDetailPostCard
        blog_title={recommended_blog!}
        blog_detail_post_Card={blog_detail_post_Card}
      />
      {news_letter_section && <NewsLetterSection block={news_letter_section} />}
    </div>
  );
};
export default BlogDetailPage;
