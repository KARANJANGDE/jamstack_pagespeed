import { RichText as RichTextTypes } from "@/lib/sanity/types";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
// const PortableText = dynamic(()=>import("@portabletext/react").then(res=>res.PortableText))
const DynamicComponent = dynamic(() => import("../DynamicComponent"));
const SanityImage = dynamic(() => import("../SanityImage"));
const CustomClickableImage = dynamic(() => import("../CustomImage/CustomClickableImage"));
const Button = dynamic(() => import("../Button"));
const Readblog = dynamic(() => import("../Readblog"));
const BlogDetailTitleDescriptionSideImageSection = dynamic(
  () => import("../BlogDetailTitleDescriptionSideImageSection")
);
const Link = dynamic(() => import("../Link"));
const TitleContent = dynamic(() => import("../TitleContent"));
const TitleSubtitle = dynamic(() => import("../TitleSubtitle"));
const ImageTitleDescriptionArraySection = dynamic(
  () => import("../ImageTitleDescriptionArraySection")
);

export interface RichTextProps {
  block: RichTextTypes;
  isClickable?: boolean;
}

const RichText: React.FC<RichTextProps> = ({ block, isClickable }) => {
  const { custom_rich_text } = block || {};

  const RichTextComponents: Partial<PortableTextReactComponents> = useMemo(
    () => ({
      unknownType: ({ value, index, ...props }) => {
        return <DynamicComponent block={value} {...props} index={index} />;
      },
      types: {
        image: ({ value }) => {
          return <SanityImage src={value} />;
        },
        title_content: ({ value }) => <TitleContent block={value} />,
        custom_image: ({ value }) => {
          return (
            <CustomClickableImage
              isClickable={!!isClickable}
              value={value}
            />
          );
        },
        button: ({ value }) => <Button block={value} />,
        title: ({ value }) => <TitleSubtitle block={value} />,
        image_title_description_array_section: ({ value }) => (
          <ImageTitleDescriptionArraySection block={value} />
        ),
        read_blog_together: ({ value }) => <Readblog block={value} />,
        title_description_side_image_Section: ({ value }) => (
          <BlogDetailTitleDescriptionSideImageSection block={value} />
        ),
      },
      marks: {
        link: ({ children, value }) => {
          return <Link to={value?.href}>{children}</Link>;
        },
      },
    }),
    [isClickable]
  );
  return (
    <PortableText value={custom_rich_text} components={RichTextComponents} />
  );
};
export default RichText;
