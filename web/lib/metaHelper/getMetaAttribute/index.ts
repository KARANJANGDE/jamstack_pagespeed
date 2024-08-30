import { CustomImageType, MetaAttributeType } from "@/lib/sanity/types";
import { MetaTag as NextSeoMetaTag } from "next-seo/lib/types";

export const resolveImage = (image?: CustomImageType) => {
  return image?.image?.asset?.url ?? "";
};

export const getMetaAttribute = (attrs: MetaAttributeType[] | undefined) => {
  if (!attrs) {
    return null;
  }
  const obj: Record<string, string> = {};
  attrs.map((i) => {
    Object.assign(obj, {
      [i?.attribute_key as string]:
        i.attribute_type == "image"
          ? resolveImage(i?.attribute_value_image)
          : i.attribute_value_string,
    });
  });
  return obj as unknown as NextSeoMetaTag;
};
