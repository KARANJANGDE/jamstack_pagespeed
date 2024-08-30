import React from "react";
import dynamic from "next/dynamic";
import { PackageDetails } from "@/lib/sanity/types/page";
const Link = dynamic(() => import("../Link"));
const FieldButton = ({ block }: { block: PackageDetails }) => {
  const button = block["button"];
  return <Link to={button?.link || ""}>{button?.label}</Link>;
};

export default FieldButton;
