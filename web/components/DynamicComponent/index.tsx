import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const Image = dynamic(() => import("../Image"));
const Button = dynamic(() => import("../Button"));
const LabelLink = dynamic(() => import("../LabelLink"));
const Author = dynamic(() => import("../Author"));
const Readblog = dynamic(() => import("../Readblog"));
const TitleSubtitle = dynamic(() => import("../TitleSubtitle"));
const TitleDescriptionSideImageSection = dynamic(
  () => import("../TitleDescriptionSideImageSection")
);
const CustomImage = dynamic(() => import("../CustomImage"));
const TitleContent = dynamic(() => import("../TitleContent"));
const TitleDescription = dynamic(
  () =>
    import("../ImageSideBySideTitleDescriptionArraySection/TitleDescription")
);
const DynamicComponent: React.FC<{
  block: any;
  index?: number;
  variant?: string;
}> = ({ block, ...props }) => {
  const Components = {
    image: Image,
    custom_image: CustomImage,
    button: Button,
    label_link: LabelLink,
    rich_text: RichText,
    author_section: Author,
    title_description: TitleDescription,
    read_blog_together: Readblog,
    title: TitleSubtitle,
    title_content: TitleContent,
    title_description_side_image_Section: TitleDescriptionSideImageSection,
  };
  const Component = block?._type
    ? Components[block?._type as keyof typeof Components]
    : null;
  // @ts-ignore
  return Component ? <Component block={block} {...props} /> : null;
};

export default DynamicComponent;
