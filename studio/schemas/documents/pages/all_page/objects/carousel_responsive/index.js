import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default {
  name: "carousel_responsive",
  title: "Carousel Responsive",
  type: "object",
  fields: fields({
    name: { required: true , initialValue : "Global" },
    min: { type: "number", validation: Rule => Rule.min(0), initialValue: 0 },
    max: { type: "number", validation: Rule => Rule.min(0), initialValue: 4000 },
    slides_to_show: { type: "number", validation: Rule => Rule.min(0), initialValue: 1 },
  }),
  preview: {
    select: {
      title: "name",
      min: "min",
      max: "max",
      slides_to_show: "slides_to_show",
    },
    prepare: ({ title, min, max, slides_to_show }) => {
      return { title: title, subtitle: `${min} to ${max} => ${slides_to_show}` }
    }
  }
};
