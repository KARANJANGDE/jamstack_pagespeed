import { handleSanityRequestError } from "@/lib/sanity/utils";
import { groq } from "next-sanity";
import { imageFields } from "../helper/imageFields";

const groqQuery = groq`*[_type == "framework" && slug.current == "/frameworks/"+ $slug + '/' ] | order(_updatedAt desc) {
_type,
_id,
slug,
name,
image{
${imageFields}
},
"richtext":content.content{
_type,
custom_rich_text
},
content_summary,
"frameworks" : *[_type == "framework" &&  defined(slug.current) && references(^.type.type._ref) ] | order(name asc){
_type,
name,
slug,
type{
_type,
type->{
_type,
slug
},
},
},
type{
type->{
_type,
name,
seo_postfix,
content{
_type,
custom_rich_text
},
},
template->{
_type,
fields[]{
_type,
name,
isDivider,
type,
(type == "string")=>{
string
},
(type == "button")=>{
button
},
(type == "boolean")=>{
boolean_value
},
(type == "slider")=>{
slider_value
},
(type == "string_with_icon")=>{
string_with_icon{
_type,
name,
image{
${imageFields}
},
},
},
(type == "string_with_boolean")=>{
string_with_boolean{
_type,
name,
boolean,
},
},
(type =="string_with_tooltip")=>{
string_with_tooltip{
_type,
name,
tooltip_name{
_type,
custom_rich_text
},
tooltip_image{
_type,
asset->{...}
},
},
},    
},
},
},
}`;

const frameWorkTwoGroqQuery =  groq`*[_type == "framework" && slug.current == "/frameworks/"+ $slug + '/' ] | order(_updatedAt desc) {
_type,
_id,
slug,
name,
image{
${imageFields}
},
"richtext":content.content{
_type,
custom_rich_text
},
content_summary,
type{
type->{
_type,
name,
content{
_type,
custom_rich_text
},
},
template->{
_type,
fields[]{
_type,
name,
isDivider,
type,
(type == "string")=>{
string
},
(type == "button")=>{
button
},
(type == "boolean")=>{
boolean_value
},
(type == "slider")=>{
slider_value
},
(type == "string_with_icon")=>{
string_with_icon{
_type,
name,
image{
${imageFields}
},
},
},
(type == "string_with_boolean")=>{
string_with_boolean{
_type,
name,
boolean,
},
},
(type =="string_with_tooltip")=>{
string_with_tooltip{
_type,
name,
tooltip_name{
_type,
custom_rich_text
},
tooltip_image{
_type,
asset->{...}
},
},
},    
},
},
},
}`;

const handleError = (error: Error, mockData: unknown = undefined) =>
  handleSanityRequestError({
    error,
    mockData,
  });

export const query = {
  groqQuery,
  handleError,
};
export const frameWorkTwoQuery = {
  groqQuery: frameWorkTwoGroqQuery,
  handleError,
};
