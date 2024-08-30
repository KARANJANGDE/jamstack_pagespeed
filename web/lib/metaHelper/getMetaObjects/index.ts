import { MetaTag as NextSeoMetaTag } from "next-seo/lib/types";

import { getMetaAttribute } from "../getMetaAttribute";
import { MetaTagType } from "@/lib/sanity/types";

export const getMetaObjects = (
  tags: MetaTagType[],
  allowIndexing?: boolean
) => {
  const tagArray: NextSeoMetaTag[] = [];
  tags.map((tag) => {
    const excludeTag =
      !allowIndexing &&
      !!tag.meta_attributes?.find(
        (i) =>
          i?.attribute_value_string?.includes("noindex") ||
          i?.attribute_value_string?.includes("nofollow")
      );
    if (!excludeTag) {
      const metaTag = getMetaAttribute(tag?.meta_attributes);
      if (metaTag) {
        tagArray.push(metaTag);
      }
    }
  });
  return tagArray;
};
