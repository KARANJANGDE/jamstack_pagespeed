import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default {
    name: 'title_subtitle_image_section',
    title:'Title Subtitle Image Section',
    type: "object",
    fields:fields ({
    title_subtitle:{type:'title'},
    img:{type:"custom_image"},
    content:{type:'rich_text'},
    section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }
    ),
    preview: {
        prepare:()=>{
            return{
          title:"Title Subtitle Image Section"}
        }
      }
}