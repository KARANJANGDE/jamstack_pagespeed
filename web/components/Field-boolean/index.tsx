import React, { Fragment } from "react";

import { PackageDetails } from "@/lib/sanity/types/page";
import TrueIcon from "@/lib/assets/icons/trueIcon";
import FalseIcon from "@/lib/assets/icons/falseIcon";

const FieldBoolean = ({ block }: { block: PackageDetails }) => {
  const value = block["boolean_value"];
  return <Fragment>{value ? <TrueIcon /> : <FalseIcon />}</Fragment>;
};

export default FieldBoolean;
