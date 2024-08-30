import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name:'title_content_array',
    title:'Title Content Array',
    type:'object',
    fields:fields({
        text_section:{type:'array',of:[{type:'title_content'}]},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview:{
        prepare:()=>{
            return{
          title:"Title Content Array"}
        }
      }
}