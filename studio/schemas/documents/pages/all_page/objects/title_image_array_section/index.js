
import { fields } from "sanity-pills";
import { modes, imagevariant } from "../../../../../constant/select-options";
export default {
    name: 'title_image_array_section',
    title:'Title Image Array Section',
    type: "object",
    fields:fields ({
    title_subtitle:{type:'title'},
    image_array:{type:'array',of:[{type:"custom_image"}]},
    section_theme:{initialValue:'bg-white',options:{ list:modes}},
    imagevariant :{initialValue: 'primary',options: {list: imagevariant}}
    }
    ),
    preview: {
        prepare:()=>{
            return{
          title:"Title Image Array Section"}
        }
      }
}