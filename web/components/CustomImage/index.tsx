import { Image } from "../Image";
import { ImageProps } from "next/image";
import { CustomImageType } from "@/lib/sanity/types";
import dynamic from "next/dynamic";
// const Link = dynamic(() => import("../Link"));
const CustomImage: React.FC<
  Omit<ImageProps, "src" | "alt"> & {
    alt?: string;
    block: CustomImageType | null;
  }
> = ({ block, ...props }) => {
  const { alt, caption, image, link } = block || {};
  if (!image) {
    return null;
  }
  return (
      <Image src={image} alt={(props.alt ?? alt) || ""} {...props} />
  );
};

export default CustomImage;
