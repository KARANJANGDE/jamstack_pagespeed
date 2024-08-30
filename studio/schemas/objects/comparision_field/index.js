export default {
  name: "comparision_field",
  title: "Comparision Field",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      required: ({ parent }) => !parent.isDivider,
      hidden: ({ parent }) => parent.isDivider,
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          "string",
          "button",
          "string_with_boolean",
          "boolean",
          "slider",
          "string_with_icon",
          "string_with_tooltip",
        ],
      },
      hidden: ({ parent }) => parent.isDivider,
    },
    {
      name: "isDivider",
      title: "Is Divider",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "string",
      title: "String",
      type: "string",
      hidden: ({ parent }) => parent.isDivider || !(parent.type === "string"),
    },
    {
      name: "button",
      title: "Button",
      type: "button",
      hidden: ({ parent }) => parent.isDivider || !(parent.type === "button"),
    },
    {
      name: "string_with_boolean",
      title: "String With Boolean",
      type: "string_with_boolean",
      hidden: ({ parent }) =>
        parent.isDivider || !(parent.type === "string_with_boolean"),
    },
    {
      name: "boolean_value",
      title: "Boolean Value",
      type: "boolean",
      hidden: ({ parent }) => parent.isDivider || !(parent.type === "boolean"),
    },
    {
      name: "slider_value",
      title: "Slider Value",
      type: "number",
      hidden: ({ parent }) => parent.isDivider || !(parent.type === "slider"),
      initialValue: 0,
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "string_with_icon",
      title: "String With Icon",
      type: "string_with_icon",
      hidden: ({ parent }) =>
        parent.isDivider || !(parent.type === "string_with_icon"),
    },
    {
      name: "string_with_tooltip",
      title: "String With Tooltip",
      type: "string_with_tooltip",
      hidden: ({ parent }) =>
        parent.isDivider || !(parent.type === "string_with_tooltip"),
    },
  ],
  preview: {
    select: {
      isDivider: "isDivider",
      name: "name",
    },
    prepare: ({ isDivider, name }) => {
      return {
        title: isDivider ? "Divider" : name,
      };
    },
  },
}