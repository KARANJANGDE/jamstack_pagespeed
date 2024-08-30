import { fields } from "sanity-pills";

export default {
  name: "image_link_array",
  title: "Image Link array",
  type: "object",
  fields: fields({
    title: {},
    image: { type: "custom_image" },
    link: { type: "label_link" },
  }),
};
