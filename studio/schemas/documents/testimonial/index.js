export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "title",
      description: "Only used in CMS.",
      type: "string",
    },
    { name: "description", type: "rich_text" },
    {
      name: "client",
      type: "reference",
      to: [{ type: "client" }],
    },
    {
      name: "disable",
      type: "boolean",
      initialValue: false,
    },
  ],
};
