import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default {
    name:'reviews_section',
    title:'Reviews Section',
    type: "object",
    fields:fields ({
        title:{},
        text_with_image:{type:'rich_text'},
        description_rich_text:{type:'rich_text'},
        book_free_consultation_button:{type:'button'},
        reviews_image:{type:"custom_image"},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }
    ),
    preview: {
        prepare:()=>{
            return{
          title:"Reviews Section"}
        }
      }
}