import { fields } from "sanity-pills";

export default {
    name: 'text_image_blocks',
    title: 'Text Image Blocks',
    type: 'object',
    fields: fields({
        section_title: { type : 'title'},
        blocks: { type: 'array', of: [{ type: 'text_image_block' }] }
    }),
    preview: {
        select: {
            title: 'section_title.title'
        }
    }
}












