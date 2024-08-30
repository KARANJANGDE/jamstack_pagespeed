import { fields } from "sanity-pills";

export default {
    name: 'text_image_block',
    title: 'Text Image Block',
    type: 'object',
    fields: fields({
        section_title: { type : 'title'},
        image: { type: 'custom_image' },
        content: { type: 'rich_text' },
        justify_content: { type: "boolean" },
        variant: {
            type: 'string', options: {
                list: ['primary', 'secondary']
            },  
            initialValue : 'primary'
        }
    }),
    preview: {
        prepare(){
            return { title : 'Text Image Block'}
        }
    }
}