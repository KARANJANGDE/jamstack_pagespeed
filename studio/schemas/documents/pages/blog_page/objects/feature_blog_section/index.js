import { createSlug, createSlugField, fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default {
  name: "feature_blog_section",
  title:"Feature Blog Section",
  type: "document",
  fields: fields({
   title:{},
   featured_post_title:{},
   all_posts_section:{},
   section_theme:{initialValue:'bg-white',options:{ list:modes}},
  }),
  preview: {
    prepare:()=>{
        return{
      title:"Blog Featured Post Section"}
    }
  }
};