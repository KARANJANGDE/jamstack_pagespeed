import { useModals } from "@/lib/hooks/useModals";
import Link from "../Link";
import React from "react";
import { getBlogLink } from "@/lib/utils/link-utils";

interface ReadblogProps {
  block?: { _ref: string };
}

const Readblog: React.FC<ReadblogProps> = ({ block }) => {
  const { data: blogData } = useModals();
  const data = blogData?.find((i) => i?._id === block?._ref);
  const { banner_title, slug } = data || {};
  return data ? (
    <div className=" bg-dark-blue block md:flex justify-between rounded-[1em] p-6 em:p-8 my-10 items-center">
      <div className="w-full md:w-[65%]">
        {banner_title && (
          <h3 className="text-[20px] esm:text-[24px] em:text-[26px] xl:text-[30px] text-white-color font-bold leading-[30px] esm:leading-[32px] em:leading-[36px] xl:leading-[40px] font-DM text-center md:text-left">
            {banner_title}
          </h3>
        )}
      </div>
      <div className="w-full md:w-[35%] mt-8 md:mt-0 text-center md:text-right [&>a]:py-2 md:[&>a]:py-3 [&>a]:px-6 md:[&>a]:px-8 hover:[&>a]:bg-btn-hover-pink [&>a]:bg-dark-pink [&>a]:text-white-color [&>a]:rounded-[5em] [&>a]:font-DM [&>a]:text-base xl:[&>a]:text-lg ">
        <Link to={slug ? getBlogLink(slug) : ""}>Read More</Link>
      </div>
    </div>
  ) : null;
};

export default Readblog;
