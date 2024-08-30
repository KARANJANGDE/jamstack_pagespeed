import { fields } from "sanity-pills";
export default {
    name: "description_author_array",
    title: "Description Author Array",
    type: "object",
    fields: fields({
      desc:{type:'rich_text'},
        testimonials_author:{
            type:"reference",
            to:[{type:"author_section"}]
        }, }     
    )
}