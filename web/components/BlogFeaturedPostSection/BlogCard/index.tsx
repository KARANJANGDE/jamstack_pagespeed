import dayjs from "dayjs";
import dynamic from "next/dynamic";
const Link = dynamic(() => import("../../Link"));
import { FeaturedPost } from "@/lib/sanity/types/page";
import { getBlogLink } from "@/lib/utils/link-utils";

const BlogCard: React.FC<{ block?: FeaturedPost }> = ({ block }) => {
  const { author, banner_title, publish_date, slug } = block || {};
  const { author_Name } = author || {};
  const convert_date = dayjs(publish_date).format("MMM DD, YYYY");

  return (
    <li className="p-4 lg:p-8 pl-2 emd:pl-8 bg-[#0000]  hover:bg-[#eaf7ff]">
      <Link to={slug ? getBlogLink(slug) : ""}>
        <div className="max-w-full sm:max-w-[90%]">
          <div className=" flex font-Inter">
            <p className="border-r-[1px] border-dark-blue text-[13.75px] font-inter font-medium text-dark-gray-shade pr-[0.75em] pb-0">
              By <span className="text-[#592ea9]">{author_Name}</span>
            </p>
            <p className="text-[13.75px] font-inter font-medium text-dark-gray-shade px-3 pb-0">
              {convert_date}
            </p>
          </div>
          <div className=" mt-2">
            <h4 className="text-[20px] em:text-[21.6562px] sm:text-[26.4px] xl:text-[30px] font-bold font-DM leading-[1.3]">
              {banner_title}
            </h4>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default BlogCard;
