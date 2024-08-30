import {createSlugField, fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name:'comparison_tools_section',
    title:'Comparison Tools Section',
    type:'object',
    fields:fields({
        Comparison_Tools_Table:{type:"array", of:[{type:"custom_table"}]},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),

    preview: {
        prepare:()=>{
            return{
          title:"Comparison Tools Section"}
        }
      }
   

}


