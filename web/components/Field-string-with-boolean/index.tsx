import React, { Fragment } from "react";

import { PackageDetails } from "@/lib/sanity/types/page";
import TrueIcon from "@/lib/assets/icons/trueIcon";
import FalseIcon from "@/lib/assets/icons/falseIcon";

const FieldStringwithBoolean = ({ block }: { block: PackageDetails }) => {
  const { boolean, name } = block["string_with_boolean"] || {};
  return (
    <Fragment>
      <div>{boolean ? <TrueIcon /> : <FalseIcon />}</div>
      <div>{name}</div>
    </Fragment>
  );
};

export default FieldStringwithBoolean;
