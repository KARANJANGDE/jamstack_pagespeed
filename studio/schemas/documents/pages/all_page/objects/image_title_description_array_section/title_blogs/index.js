import { fields } from "sanity-pills";
import { modes } from "../../../../../../constant/select-options";
export default {
  name: "title_blog",
  title: "Blog",
  type: "object",
  fields: fields({
    image: { type: "custom_image" },
    title: {},
    content: { type: "rich_text" },
    section_theme:{initialValue:'bg-white',options:{ list:modes}},
  }),
  preview: {
    prepare: () => {
      return {
        title: "Blog"
      }
    }
  }
}

