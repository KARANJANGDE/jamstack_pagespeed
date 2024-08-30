import { fields } from "sanity-pills";
export default {
    name: 'title_content',
    title: 'Title Content',
    type: 'object',
    fields:fields ({
        title:{},
        content: { type: "rich_text" },
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Title Content"}
        }
      }
        
}