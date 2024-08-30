export default {
  name: "plan",
  title: "Plan",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "plan_name",
      title: "Plan Name",
      type: "string",
    },
    {
      name:'discount',
      title:'Discount',
      type:'string'
    },
    // {
    //   name: "plan_services",
    //   title: "Plan Services",
    //   type: "array",
    //   of: [{ type: "string" }],
    // },
    {
      name: "plan_services_template",
      title: "Plan Service Template",
      type: "reference",
      to: { type: "plan_services_template" },
    },
    {
      name: "packages",
      title: "Packages",
      type: "array",
      of: [{ type: "reference", to: [{ type: "package" }] }],
    },
  ],
};
