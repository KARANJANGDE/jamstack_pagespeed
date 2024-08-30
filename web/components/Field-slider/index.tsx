import React, { Fragment } from "react";
import { PackageDetails } from "@/lib/sanity/types/page";

const FieldSlider = ({ block }: { block: PackageDetails }) => {
  const value = block["slider_value"];
  return (
    <Fragment>
      <input
        type="range"
        id="vol"
        name="vol"
        min="0"
        max="100"
        step="1"
        className="slider-dot"
        value={value || 0}
        disabled
      />
    </Fragment>
  );
};

export default FieldSlider;
