import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name:'tech_stack_section',
    title:'Tech Stack Section',
    type:'object',
    fields:fields({
        title_subtitle:{type:'title'},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Tech Stack Section"}
        }
      }
       
   
}