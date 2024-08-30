import { fields } from "sanity-pills";
export default {
  name: "footer_banner",
  title: "Footer Banner",
  type: "object",
  fields: fields({
    title: {},
    banner_title: {},
    content: { type: "rich_text" },
    button: { type: "button" },
    extra_text: { type: "extra_text_link" },
    images: { type: "array", of: [{ type: "custom_image" }] },
  }),
};
