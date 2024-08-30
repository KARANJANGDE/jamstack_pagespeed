
import NextImage, { ImageProps } from "next/image";
import { ImageType } from "@/lib/sanity/types";
import { useSanityImage } from "@/lib/sanity";
const SanityImage: React.FC<
  Omit<ImageProps, "src" | "alt"> & {
    src: ImageType;
    alt?: string;
  }
> = ({ src, ...props }) => {
  const image = useSanityImage(src);
  return image ? (
    <NextImage {...image} alt={props.alt || ""} {...props} />
  ) : null;
};
export default SanityImage;
