import { fields } from "sanity-pills";
import { background_classname, modes } from "../../../../../constant/select-options";
export default{
    name:'hero_section_case_study_d_page',
    title:'Hero Section',
    type:'object',
    fields:fields({
        section_title:{},
        title:{},
        description:{type:'text'},
        button:{type:'array',of:[{type:'button'}]},
        image:{type:'array',of:[{type:'custom_image'}]},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
        background_classname:{initialValue:'white',options:{list:background_classname}}
    }),
    
    preview: {
        prepare:()=>{
            return{
          title:"Hero Section"}
        }
      }
}