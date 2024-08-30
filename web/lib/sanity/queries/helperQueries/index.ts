import { footerFields } from "../helper/footerFields";
import { headerFields } from "../helper/headerFields";
import { seofields } from "../helper/seoFields";

export const header = /* groq */ `
header->{
${headerFields}
} 
`;
export const seo = /* groq */ `seo{
${seofields}  
}`;

export const footer = /* groq */ `
footer->{
${footerFields}
}
`;
