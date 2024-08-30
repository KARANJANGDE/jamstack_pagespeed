import { fields,of } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default {
  name: "casestudy_bestwork_section",
  title: "Casestudy Bestwork Section",
  type: "document",
  fields: fields({
    title_subtitle:{type:'title'},
    section_theme:{initialValue:'bg-white',options:{ list:modes}},
  }),

  preview: {
    prepare:()=>{
        return{
      title:"Casestudy Bestwork Section"}
    }
  }
};
