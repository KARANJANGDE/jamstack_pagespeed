import { fields } from "sanity-pills";
export default {
    name: 'content',
    title: 'Content',
    type: 'object',
    fields: fields({
        build_image:{type:'custom_image'},
        content:{type:'rich_text'}
    })
}