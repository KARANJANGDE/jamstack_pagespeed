import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name:'hiring_model_section',
    title:'Hiring Model Section',
    type:'object',
    fields:fields({
        title_subtitle:{type:'title'},
        sub_sections:{ type:'array',
        of:[{type:'hire_team'}]},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Hiring Model Section"}
        }
      }
       
   
}