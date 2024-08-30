import { fields } from "sanity-pills";
export default {
  name: "testimonial_request",
  title: "Testimonial Request",
  type: "document",
  fields: fields({
    name: { readOnly: true },
    email: { readOnly: true },
    couponCode: { readOnly: true },
  }),
  preview: {
    select: {
      title: "name",
    },
  },
};
