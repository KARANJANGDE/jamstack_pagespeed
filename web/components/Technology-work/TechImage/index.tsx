import { CustomImageType } from "@/lib/sanity/types";
import dynamic from "next/dynamic";
const CustomImage = dynamic(() => import("../../CustomImage"));
const TechImage: React.FC<{ image: CustomImageType }> = ({ image }) => {
  return (
    <li
    // flex justify-center items-center h-full w-full bg-[16px_2px,16px_2px,2px_16px,2px_16px] animate-[dash_40s_linear_infinite] p-[1em] rounded-[0.5em]
    // ![&>img]:w-auto ![&>img]:h-auto max-em:[&>img]:max-w-[5em] [&>img]:max-w-[6em] [&>img]:max-h-[2em]
    // bg-dashed-gradient animation-dash [&>img]:object-contain
      className="flex justify-center items-center h-full w-full bg-[16px_2px,16px_2px,2px_16px,2px_16px] animate-[dash_40s_linear_infinite] rounded-[0.5em] [&>img]:max-w-[261px] [&>img]:max-h-[87px]  bg-dashed-gradient animation-dash [&>img]:object-contain"
      style={{
        backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
        backgroundPosition: " 0% 0%, 100% 100%, 0% 100%, 100% 0px",
      }}
    >
      <CustomImage block={image} height={100} width={100} />
    </li>
  );
};

export default TechImage;
