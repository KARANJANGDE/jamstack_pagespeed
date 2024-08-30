import { createSlug, fields } from "sanity-pills";
import { modes } from "../../constant/select-options";

export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: fields({
    title: {},
    slug: {
      type: "slug",
      options: {
        source: "title",
        slugify: createSlug,
      },
      required: true,
    },
  }),
};