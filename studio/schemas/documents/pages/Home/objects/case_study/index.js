import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default {
    name: "case_study",
    title: "Case Study",
    type: "object",
    fields: fields({
        title_subtitle:{type:'title'},
        case_study_img:{type: 'custom_image'},
        section_title:{},
        description:{type: "text",},
        author:{
            type:"reference",
            to:[{type:"author_section"}]
        },
        read_full_case_study_button:{ type:"button"},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }
    ),




    preview: {
        prepare:()=>{
            return{
          title:"Case Study"}
        }
      }

}