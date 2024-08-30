import React from "react";
import { Image } from "../Image";
import { PortableText } from "@portabletext/react";
import { PackageDetails } from "@/lib/sanity/types/page";

const FieldStringwithTooltip = ({
  block,
}: {
  block: PackageDetails;
}) => {
  const { tooltip_image, tooltip_name, name } =
    block["string_with_tooltip"] || {};
  return (
    <div className="tooltipwithImg">
      <div>{name}</div>
      <div className="tooltip-img">
        <Image
          src={tooltip_image?.asset?.url || ""}
          width={10}
          height={10}
          alt={tooltip_image?.asset?.altText || "image"}
        />
      </div>

      <div className="tooltip-data">
        {tooltip_name && <PortableText value={tooltip_name.custom_rich_text} />}
      </div>
    </div>
  );
};

export default FieldStringwithTooltip;
