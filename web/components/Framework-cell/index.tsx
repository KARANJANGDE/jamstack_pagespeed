import React, { Fragment } from "react";
import FieldBoolean from "../Field-boolean";
import FieldButton from "../Field-button";
import FieldSlider from "../Field-slider";
import FieldString from "../Field-string";
import FieldStringwithBoolean from "../Field-string-with-boolean";
import FieldStringwithIcon from "../Field-string-with-icon";
import FieldStringwithTooltip from "../FieldStringwithTooltip";
import { PackageDetails } from "@/lib/sanity/types/page";

const FrameworkCell = ({ block }: { block?: PackageDetails }) => {
  const cell_components: Record<string, React.FC<{ block: PackageDetails }>> = {
    string: FieldString,
    button: FieldButton,
    string_with_boolean: FieldStringwithBoolean,
    boolean: FieldBoolean,
    slider: FieldSlider,
    string_with_icon: FieldStringwithIcon,
    string_with_tooltip: FieldStringwithTooltip,
  };
  const Component =
    block?.type && !block.isDivider ? cell_components[block.type] : () => <></>;
  return <Fragment>{block ? <Component block={block!} /> : "-"}</Fragment>;
};

export default FrameworkCell;
