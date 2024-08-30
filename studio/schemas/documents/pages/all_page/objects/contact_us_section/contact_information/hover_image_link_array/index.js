import { fields } from "sanity-pills";

export default {
  name: "hover_image_link_array",
  title: "Hover Image Link array",
  type: "object",
  fields: fields({
    title: {},
    image: { type: "custom_image" },
    hover_image: { type: "custom_image" },
    link: { type: "label_link" },
  }),
};
