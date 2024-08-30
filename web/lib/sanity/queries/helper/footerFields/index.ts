import { imageFields } from "../imageFields";

export const footerBannerFields = /* groq */ `
_type,
banner_title,
button,
content{
_type,
custom_rich_text
},
images[]{
${imageFields},
},
extra_text
`;

export const footerFields = /* groq */ `
_type,
footer_logo{
${imageFields}
},
footer_links,
contact_link,
footer_banner->{
${footerBannerFields}
} 
`;
