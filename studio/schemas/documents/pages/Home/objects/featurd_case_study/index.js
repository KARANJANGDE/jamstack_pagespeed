import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default {
    name: "featurd_case_study",
    title: "Featurd Case Study",
    type: "object",
    fields:fields ({
        title_subtitle:{type:'title'},
        case_study_image:{
            type:'custom_image'
        },
        core_web_title:{},
        process_image:{type:'custom_image'},
        case_study_blog:{
           type:"rich_text"
        },
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    
    }
    ),
    preview: {
        prepare:()=>{
            return{
          title:"Featurd Case Study"}
        }
      }
}