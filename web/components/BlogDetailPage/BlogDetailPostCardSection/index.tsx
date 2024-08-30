import React from "react";
import HomeBlogPostCard from "../../../components/Homeblog/HomeBlogPostCard";
import TitleSubtitle from "../../TitleSubtitle";
import { TitleSubtitleType } from "@/lib/sanity/types";
import { BlogsType } from "@/lib/sanity/types/page";

const BlogDetailPostCard: React.FC<{
  blog_title?: TitleSubtitleType;
  blog_detail_post_Card?: BlogsType[];
}> = ({ blog_title, blog_detail_post_Card }) => {
  return (
    <div>
      <div className="container">
        <div>
          <div>
            <TitleSubtitle block={blog_title} />
          </div>
          <div className="pb-12">
            <ul className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] gap-x-[1.875em] gap-y-[1.875em] items-start ">
              {blog_detail_post_Card?.map((item, index) => {
                return <HomeBlogPostCard block={item} key={index} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetailPostCard;
