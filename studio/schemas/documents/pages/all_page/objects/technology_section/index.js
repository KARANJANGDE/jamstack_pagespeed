import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default {
  name: "technology_section",
  title: "Technology Section",
  type: "object",
  fields: fields({
    title_subtitle: { type: "title" },
    image_array:{type:'array',of:[{type:"custom_image"}]},
    single_image:{type:"custom_image"},
    section_theme:{initialValue:'bg-white',options:{ list:modes}},
  }),
  preview: {
    prepare:()=>{
        return{
      title:"Technology Section"}
    }
  }
};
