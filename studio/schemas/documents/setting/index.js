export default {
  name: "setting",
  title: "Setting",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    { name: "description", title: "Description", type: "text" },
    {
      name: "telePhone",
      type: "string",
      title: "TelePhone",
    },
    {
      name: "image",
      title: "Image",
      type: "custom_image",
    },
  ],
};
