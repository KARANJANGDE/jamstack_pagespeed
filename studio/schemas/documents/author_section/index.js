import { fields } from "sanity-pills";
import { modes } from "../../constant/select-options";

export default {
  name: "author_section",
  title: "Author Section",
  type: "document",
  fields: fields({
    author_Name: {},
    company: { type: "label_link" },
    author_Image: { type: "custom_image" },
    author_Post: {},
    social_Icon: { type: "array", of: [{ type: "custom_image" }] },
    section_theme: { initialValue: "bg-white", options: { list: modes } },
  }),
};