import { fields } from "sanity-pills";
import { background_classname, modes } from "../../../../../constant/select-options";
export default {
  name: "home_hero_section",
  title: "Home Hero Section",
  type: "object",
  fields: fields({
    title:{},
    hero_image:{type: "custom_image",},
    hero_title:{},
    hero_description:{type: "text",},
    title_image:{type: "custom_image",},
    start_project_button:{type: "button",},
    jamstack_developer_button:{type: "button",},
    bottom_description:{type:'text'},
    section_theme:{initialValue:'bg-white',options:{ list:modes}},
    background_classname:{initialValue:'white',options:{list:background_classname}}
  }),
  preview: {
    prepare:()=>{
        return{
      title:"Home Hero Section"}
    }
  }
};
