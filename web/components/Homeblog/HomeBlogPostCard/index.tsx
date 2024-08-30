
import { useRouter } from "next/router";
import React from "react";

import CustomImage from "../../CustomImage";
import { BlogsType } from "@/lib/sanity/types/page";
import Link from "@/components/Link";
import Image from "@/components/Image";
import { routes } from "@/lib/routes";

const HomeBlogPostCard: React.FC<{ block: BlogsType }> = ({ block }) => {
  const { banner_title, hero_image, slug, category, banner_desc } =
    block || {};
  const router = useRouter();
  const { slug: category_slug } = router?.query;
  const current_category = category?.find(
    (i) => i?.slug?.current === category_slug
  );
  const blog_link = slug?.current.startsWith("/blog/")
    ? slug?.current
    : "/blog/" + String(slug?.current);
  return (
    <li className="m-0">
      <div>
        <div>
          <Link
            aria-label={hero_image?.alt}
            to={blog_link}
            className="w-full max-w-full [&>img]:max-h-[23.6875em] [&>img]:w-full [&>img]:h-full"
          >
            {hero_image && <CustomImage block={hero_image} />}
          </Link>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="mt-4">
            <ul className="flex flex-wrap font-DM">
              {current_category ? (
                <li className="mb-2 mr-2 [&>a]:text-[0.75em] [&>a]:font-semibold [&>a]:rounded-[0.5em] [&>a]:text-dark-blue [&>a]:bg-white-shad-color [&>a]:py-2 [&>a]:px-4 hover:[&>a]:text-dark-pink">
                  <Link
                    aria-label={current_category.title}
                    to={
                      current_category?.slug?.current
                        ? routes.post_category(current_category.slug.current)
                        : routes.blog_index()
                    }
                  >
                    {current_category.title}
                  </Link>
                </li>
              ) : (
                category?.map((i, index) => (
                  <li
                    key={index}
                    className="mb-2 mr-2 text-[0.85em] md:text-[0.9em] [&>a]:font-semibold [&>a]:rounded-[0.5em] hover:[&>a]:text-dark-pink [&>a]:text-dark-blue [&>a]:bg-white-shad-color [&>a]:py-2 [&>a]:px-4"
                  >
                    <Link
                      aria-label={i.title}
                      to={
                        i?.slug?.current
                          ? routes.post_category(i.slug.current)
                          : routes.blog_index()
                      }
                    >
                      {i?.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
            <div className="flex flex-col min-h-auto min-h-auto md:min-h-[13em] xl:min-h-[16em]">
              <div>
                <Link
                  aria-label={banner_title}
                  to={blog_link}
                  className="mt-3 cursor-pointer hover:[&>h4]:text-dark-pink"
                >
                  <h1 className="text-[17.325px] emd:text-[21.6562px] xl:text-[24.75px] font-bold text-black-shade-color mb-2 text-left leading-[1.25em] font-DM">
                    {banner_title}
                  </h1>
                </Link>
              </div>
              <div>
                <Link
                  aria-label={banner_desc?.substring(0, 150)}
                  to={blog_link}
                  className="mt-3 cursor-pointer hover:[&>h4]:text-dark-pink"
                >
                  <p className="text-[14.175px] emd:text-[14.4375px] xl:text-[16.5px] font-normal text-black-shade-color font-Inter leading-[25px] opacity-70 line-clamp-3 mb-4 pb-0">
                    {banner_desc?.substring(0, 150)}
                  </p>
                </Link>
              </div>
              <div className="">
                <Link
                  aria-label={slug?.current}
                  to={blog_link}
                  className="relative inline-flex cursor-pointer group"
                >
                  <Image
                    src="/right-arrow.svg"
                    alt="right-arrow"
                    height={10}
                    width={10}
                    className="fix-img"
                  />
                  <Image
                    src="/right-hover-arrow.svg"
                    alt="right-arrow"
                    className="hover-img absolute z-[-1] group-hover:z-[10]"
                    height={10}
                    width={10}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default HomeBlogPostCard;
