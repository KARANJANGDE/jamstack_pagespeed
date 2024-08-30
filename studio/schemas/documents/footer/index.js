import { fields } from "sanity-pills";
import { modes, variant } from "../../constant/select-options";
export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: fields({
    title:{},
    footer_logo:{type: "custom_image",},
    footer_links:{type:'array',
    of:[{type:'label_link'}]},
    contact_link:{type:'label_link'},
    copyright_text:{},
    contact_no: {},
    footer_banner:{ type: "reference",
    to: [{ type: "footer_banner" }],},
    section_theme:{initialValue:'bg-white',options:{ list:modes}},
    top_label:{},
    top_link: {},
  })
};
