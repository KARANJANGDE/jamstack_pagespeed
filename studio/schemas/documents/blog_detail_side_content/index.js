import { createSlug, createSlugField, fields } from "sanity-pills";
export default {
    name: "blog_detail_side_content",
    title: "Blog Detail content",
    type: "document",
    fields: fields({
        title:{},
    title_logo_array:{type:"title_logo_array"},
    join_our_news_letter:{type:"join_our_news_letter"},
    slug: createSlugField({ source: "title", prefix: "blog-inner-data" }),
    })
}