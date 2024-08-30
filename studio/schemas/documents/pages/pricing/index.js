import Tabs from "sanity-plugin-tabs";

export default {
  name: "pricingPage",
  title: "Pricing",
  type: "document",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
      name: "plans",
      title: "Current Plans",
      type: "array",
      of: [{ type: "reference", to: { type: "plan" } }],
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
      name: "plan_coupon_code",
      title: "Coupon code configs",
      type: "plan_coupon",
      fieldset: "main",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      fieldset: "seo",
    },
  ],
};
