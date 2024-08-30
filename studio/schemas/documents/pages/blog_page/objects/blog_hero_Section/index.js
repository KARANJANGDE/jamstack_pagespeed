import { createSlug, createSlugField, fields } from "sanity-pills";
import { background_classname, modes } from "../../../../../constant/select-options";
export default {
  name: "blog_hero_section",
  title: "Blog Hero Section",
  type: "document",
  fields: fields({
   title:{},
   hero_image:{type:"custom_image"},
   section_theme:{initialValue:'bg-white',options:{ list:modes}},
   background_classname:{initialValue:'white',options:{list:background_classname}}
  }),
  preview: {
    prepare:()=>{
        return{
      title:"Blog Hero Section"}
    }
  }
};