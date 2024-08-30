import { PackageDetails } from "@/lib/sanity/types/page";
import React, { Fragment } from "react";

const FieldString = ({ block }: { block: PackageDetails }) => {
  const string = block["string"];
  return (
    <Fragment>
      <div>{string}</div>
    </Fragment>
  );
};

export default FieldString;
