import { fields } from "sanity-pills";
import { modes, variant } from "../../../../../constant/select-options";

export default {
  name: "book_consultation",
  title: "Book Consultation",
  type: "object",
  fields: fields({
    title_subtitle: { type: "title" },
    staff: { type: "reference", to: { type: "staff" } },
    section_image: { type: "custom_image" },
    content: { type: "rich_text" },
    section_theme: { initialValue: "bg-white", options: { list: modes } },
    variant :{initialValue : 'primary',options: {list: variant}},
  }),
  preview: {
    prepare: () => {
      return {
        title: "Book Consultation",
      };
    },
  },
};