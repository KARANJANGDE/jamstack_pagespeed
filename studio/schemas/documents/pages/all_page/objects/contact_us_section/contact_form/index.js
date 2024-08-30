import { fields } from "sanity-pills";
import { modes } from "../../../../../../constant/select-options";

export default{
    name: "contact_form",
    title: "Contact Form",
    type: "object",
    fields: fields({
      firstname_title: {},
      lastname_title: {},
      email_title:{},
      phone_number_title:{},
      message_title:{},
      message_placeholder:{},
     send_message_button:{type:'button'},
      section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
      prepare:()=>{
          return{
        title:"Contact Form"}
      }
    }
}