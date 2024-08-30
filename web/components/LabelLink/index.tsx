import React, { Fragment } from "react";
import Link from "../Link";
import { LabelLink } from "@/lib/sanity/types";

const LabelLink: React.FC<{ block: LabelLink }> = ({ block }) => {
  const { label, link } = block || {};
  return (
    <Fragment>
      <Link aria-label={label} className="[&>a]:text-sm" to={link}>
        {label}
      </Link>
    </Fragment>
  );
};

export default LabelLink;
