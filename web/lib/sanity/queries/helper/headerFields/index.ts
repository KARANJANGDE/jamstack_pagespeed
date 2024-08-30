import { imageFields } from "../imageFields";

export const headerFields = /* groq */ `
_id,
_type,
background_classname,
logo{
${imageFields}
},
button,
nav_links,
"top_header" : ^.footer->{contact_link, top_link, top_label, contact_no}
`;
