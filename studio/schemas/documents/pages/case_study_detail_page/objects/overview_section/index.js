import { fields } from "sanity-pills";

import { modes } from "../../../../../constant/select-options";
export default {
    name: 'overview_section',
    title: 'Overview Section',
    type: 'object',
    fields: fields({
        title_subtitle: {type:'title'},
        feature_image: {
            type: "array",
            of: [{type: "custom_image"}]},
        section_title : {type:'title_description'},
        technology_icon: { type: "array", of: [{ type: "custom_image" }] },

    }),
    section_theme:{initialValue:'bg-white',fieldset:'main',options:{ list:modes}},
    preview: {
        prepare:()=>{
            return{
          title:"Overview Section"}
        }
      }
}