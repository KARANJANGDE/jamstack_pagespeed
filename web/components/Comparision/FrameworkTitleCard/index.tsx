
import React from "react";
import { Framework } from "@/lib/sanity/types/framework";

const FrameworkTitleCard: React.FC<{
  block: {
    framework_1: Framework;
    framework_2: Framework;
  };
}> = ({ block }) => {
  const { framework_1, framework_2 } = block || {};
  return (
    <div>
    <h1 className="text-4xl sm:text-5xl md:text-6xl text-dark-pink text-center font-bold leading-normal">
      {framework_1?.name} VS {framework_2?.name}
    </h1>
  </div>
  );
};

export default FrameworkTitleCard;
