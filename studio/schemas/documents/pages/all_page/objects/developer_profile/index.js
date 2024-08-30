import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name: "developer_profile",
    title: "Developer Profile",
    type: "object",
    fields: fields({
        
        title:{},
        content: { type: "rich_text" },
      name_placeholder: { required: true },
      email_placeholder:{required: true },
      select_type_of_project:{},
      select_type_button:{type:'array',of:[{type:'string'}]},
      how_can_we_help_placeholder:{type:'text'},
      hire_jamstack_development_button:{type:'button'},
      image:{type:'custom_image'},    
      section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
      prepare:()=>{
          return{
        title:"Developer Profile"}
      }
    }
}