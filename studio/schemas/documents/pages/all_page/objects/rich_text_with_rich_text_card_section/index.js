
import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default {
    name: 'rich_text_with_rich_text_card_section',
    title:'Rich Text With Rich Text Card Section',
    type: "object",
    fields:fields ({
   definition_rich_text:{type:'rich_text'},
   definition_card_array:{type:'array',of:[{type:'rich_text'}]},
   section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }
    ),
    preview: {
        prepare:()=>{
            return{
          title:"Rich Text With Rich Text Card Section"}
        }
      }
}