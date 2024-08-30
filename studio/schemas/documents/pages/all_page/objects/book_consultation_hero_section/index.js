import { fields } from "sanity-pills";
import { background_classname, modes, variant } from "../../../../../constant/select-options";

export default {
  name: "book_consultation_hero_section",
  title: "Book Consultation Hero Section",
  type: "object",
  fields: fields({
    title_subtitle: { type: "title" },
    content: { type: "rich_text" },
    section_theme: { initialValue: "bg-white", options: { list: modes } },
    variant :{initialValue : 'primary',options: {list: variant}},
    background_classname:{initialValue:'white',options:{list:background_classname}}

  }),
  preview: {
    prepare: () => {
      return {
        title: "Book Consultation Hero Section",
      };
    },
  },
};