import { imageFields } from "../../../imageFields";


export const metaAttributesQuery = /* groq */ `
_type,
attribute_value_string,
attribute_type,
attribute_key,
attribute_value_image{
${imageFields}
}
`
