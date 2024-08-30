import React, { FC } from "react";
import FrameworkOverviewCard from "../FrameworkOverviewCard";
import { Framework } from "@/lib/sanity/types/framework";

const ComparisionOverview: FC<{
  block: { frameworks: Framework[] };
}> = ({ block }) => {
  if (!block?.frameworks) {
    return null;
  }
  return (
    <ul className="grid grid-cols-[1fr] em:grid-cols-[1fr_1fr] items-baseline [&>*:nth-child(1)]:border-b-[0.0625em] em:[&>*:nth-child(1)]:border-b-0 em:[&>*:nth-child(2)]:border-l-[0.0625em] [&>*:nth-child(2)]:border-dark-pink [&>*:nth-child(2)>div]:pl-6 em:[&>*:nth-child(2)>div]:pl-14 md:[&>*:nth-child(2)>div]:pl-20 [&>*:nth-child(2)>h5]:pt-8 em:[&>*:nth-child(2)>h5]:pt-0">
      {block?.frameworks?.map((i, index) => (
        <FrameworkOverviewCard key={index} block={{ framework: i }} />
      ))}
    </ul>
  );
};

export default ComparisionOverview;
