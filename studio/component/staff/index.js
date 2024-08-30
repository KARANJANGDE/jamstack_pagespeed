import { fields } from "sanity-pills";
export default {
  name: "staff",
  title: "Staff",
  type: "object",
  fields: fields({
    staff_name: {},
    staff_image: { type: "custom_image" },
    staff_content: { type: "rich_text" },
    company: { type: "label_link" },
    staff_post: {},
  }),
  preview: {
    prepare: () => {
      return {
        title: "Staff",
      };
    },
  },
};