import Tabs from "sanity-plugin-tabs";
export default {
  name: "blog_detail_page",
  title: "Blog Detail Page",
  type: "document",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
    { name: "sidebar", title: "Sidebar" },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "main",
    },
    {
      name: "publish_date",
      title: "Publish Date",
      type: "date",
      fieldset: "main",
    },
    {
      name: "header",
      title: "Header",
      type: "reference",
      to: [{ type: "header" }],
      fieldset: "main",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author_section" }],
      fieldset: "main",
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      fieldset: "main",
    },
    {
      name: "banner_title",
      title: "Banner Title",
      type: "string",
      fieldset: "main",
    },
    {
      name: "banner_desc",
      title: "Banner Desc",
      type: "text",
      fieldset: "main",
    },
    {
      name: "logo_Image",
      title: "logo Image",
      type: "custom_image",
      fieldset: "main",
    },
    {
      name: "button",
      title: "Button",
      type: "button",
      fieldset: "main",
    },
    {
      name: "hero_image",
      title: "Hero Image",
      type: "custom_image",
      fieldset: "main",
    },
    {
      name: "content",
      title: "Content",
      type: "rich_text",
      fieldset: "main",
    },
    {
      name: "recommended_blog",
      title: "Recommended Blog",
      type: "title",
      fieldset: "main",
    },
    {
      name: "blog_post_card",
      title: "Blog Post Card",
      type: "our_blog_section",
      fieldset: "main",
    },
    {
      name: "news_letter_section",
      title: "News Letter Section",
      type: "reference",
      to: [{ type: "news_letter" }],
      fieldset: "main",
    },

    {
      name: "footer",
      title: "Footer",
      type: "reference",
      to: [{ type: "footer" }],
      fieldset: "main",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      fieldset: "main",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      fieldset: "seo",
    },
    // contanet name wrong in sidebar because name is reflact
    {
      name: "share_text",
      title: "Share Text",
      type: "string",

      fieldset: "sidebar",
    },
    {
      name: "contant_card_title",
      title: "Contant Card Title",
      type: "string",
      fieldset: "sidebar",
    },
    {
      name: "contant",
      title: "Contant",
      type: "array",
      of: [
        {
          type: "section",
        },
      ],
      fieldset: "sidebar",
    },
  ],
};


