import { fields } from "sanity-pills";
export default {
    name: 'title',
    title: 'Title',
    type: 'object',
    fields: fields({
        title: {},
        sub_title: {},
        caption: { description: "The text written here will apear after sub title" }

    })

}