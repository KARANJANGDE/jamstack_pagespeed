import { fields } from "sanity-pills";
import { modes } from "../../../../constant/select-options";
export default {
  name: "plan_coupon",
  title: "plan coupon",
  type: "object",
  fields: fields({
    coupon_title: {},
    coupon_placeholder: {},
    coupon_label: { type: "string" },
    section_theme: { initialValue: "bg-white", options: { list: modes } },
  }),

  preview: {
    prepare: () => {
      return {
        title: "plan coupon",
      };
    },
  },
};