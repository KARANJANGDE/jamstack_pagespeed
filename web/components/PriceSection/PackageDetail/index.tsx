import { PackageDetails } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
import React from "react";
const Image = dynamic(() => import("../../Image"));
const RichText = dynamic(() => import("@/components/RichText"));

const PackageDetail = ({ item }: { item: PackageDetails }) => {
  const { string_with_tooltip } = item || {};
  const { tooltip_name, tooltip_image, name } = string_with_tooltip || {};
  switch (item?.type) {
    case "string":
      return <div className="price-tab"> {item?.string} </div>;
    case "string_with_tooltip":
      return item.string_with_tooltip ? (
        <div className="relative group cursor-pointer">
          <div className="block relative"> {name} </div>
          <div className="hidden group-hover:block z-20 border border-dark-pink absolute top-[1.8em] left-[-1em] right-0 w-[12em] p-2 [&>ul]:flex [&>ul]:flex-wrap [&>ul]:justify-center [&>ul>li]:text-[0.75em] [&>ul>li]:text-dark-blue bg-tooltip-hover-gradient">
            {tooltip_name && <RichText block={tooltip_name} />}
          </div>
          <div className="![&>img]:h-auto [&>img]:w-[0.8em] absolute right-[0.5em] top-[-0.7em] z-0">
            {tooltip_image && <Image src={tooltip_image} alt="tooltip" />}
          </div>
        </div>
      ) : (
        <div className="price-tab"> {item?.string_with_icon?.name} </div>
      );
    case "boolean":
      return item?.boolean_value ? (
        <div className="price-tab">
          <Image
            src="/black-true.png"
            alt="true"
            height={10}
            width={100}
            className="max-w-[1.2em] mx-auto"
          />
        </div>
      ) : (
        <div className="price-tab">
          <Image
            src="/black-false.png"
            alt="'False'"
            height={10}
            width={10}
            className="max-w-[1em] mx-auto"
          />
        </div>
      );
    default:
      return null;
  }
};

export default PackageDetail;
