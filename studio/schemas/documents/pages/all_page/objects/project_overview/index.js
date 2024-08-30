import { fields } from "sanity-pills";
export default {
  name: "project_overview",
  title: "Project Overview",
  type: "object",
  fields:fields({
    title:{},
    description: {type:'rich_text'}
}),
preview: {
    prepare:()=>{
        return{
      title:"Project Overview"}
    }
  }
};