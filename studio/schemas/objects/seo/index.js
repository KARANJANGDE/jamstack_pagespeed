export default {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "meta_title",
      title: "Title",
      type: "string",
    },
    {
      name: "meta_description",
      title: "Description",
      type: "string",
    },
    {
      name: "meta_image",
      title: "Feature Image",
      type: "custom_image",
    },
    {
      name: "meta_tags",
      title: "Meta Tags",
      type: "array",
      of: [{ type: "meta_tag" }],
    },
  ],
};
