import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default {
  name: "section_course_title",
  title: "Section Course Title",
  type: "object",
  fields: fields({
    title_subtitle: { type: "title" },
    book_Cnsultation_button:{ type: "button"},
    section_theme:{initialValue:'bg-white',options:{ list:modes}},
  }),
  preview: {
    prepare:()=>{
        return{
      title:"Section Course Title"}
    }
  }
    
};
