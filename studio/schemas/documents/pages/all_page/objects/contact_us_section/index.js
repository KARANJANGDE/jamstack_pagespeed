import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";

export default{
    name: "contact_us_section",
    title: "Contact Us Section",
    type: "object",
    fields: fields({
      contact_information:{type:'contact_information'},
      contact_form:{type:'contact_form'},
      section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
      prepare:()=>{
          return{
        title:"Contact Us Page Section"}
      }
    }
}