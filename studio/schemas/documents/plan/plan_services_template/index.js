export default {
    name: "plan_services_template",
    title: "Plan Services Template",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        description : "Only used in CMS.",
        type: "string",
      },
      {
        name: "plan_services",
        title: "Plan Services",
        type: "array",
        of: [{ type: "string" }],
      },
    ],
  };
  