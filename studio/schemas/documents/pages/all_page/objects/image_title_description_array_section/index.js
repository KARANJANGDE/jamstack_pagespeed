import { fields } from "sanity-pills";
import { modes, variant } from "../../../../../constant/select-options";
export default {
  name: "image_title_description_array_section",
  title: "Image Title Description Array Section",
  type: "object",
  fields: fields({
    title_subtitle: { type: "title" },
    title_blogs: {
      type: "array",
      of: [
        {
          type: "title_blog",
        },
      ],
    },
    section_theme: { initialValue: 'bg-white', options: { list: modes } },
    align: {initialValue: 'center',options: { list: [{title : 'Left', value:'left'}, {title: 'Center', value:'center'}] , layout: "radio"}},
    background: {initialValue: 'withBackground',options: { list: [{title : 'With-Background', value:'withBackground'}, {title: 'Without-Background', value:'withoutBackground'}] , layout: "radio"}},
    variant :{initialValue: 'primary',options: {list: variant}}
  }),
  preview: {
    prepare: () => {
      return {
        title: "Image Title Description Array Section"
      }
    }
  }
};
