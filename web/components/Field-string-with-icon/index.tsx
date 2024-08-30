import React from "react";
import { Image } from "../Image";
import { PackageDetails } from "@/lib/sanity/types/page";

const FieldStringwithIcon = ({
  block,
}: {
  block: PackageDetails;
}) => {
  const { image, name } = block["string_with_icon"] || {};
  return (
    <div className="table-icon">
      <div>
        <Image
          src={image || ""}
          width={10}
          height={10}
          alt={image?.asset?.altText || "image"}
        />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default FieldStringwithIcon;
