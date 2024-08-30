export default {
  name: "pricing",
  title: "Pricing Section",
  type: "object",
  fields: [
    {
      name: "plans",
      type: "array",
      of: [{ type: "reference", to: [{ type: "plan" }] }],
    },
    {
        name: 'plan_navigation',
        title: 'Plan Nav',
        type: 'string'
    },
    {
        name: 'plan_discuss',
        title: 'Plan Discuss',
        type: 'button'
    }
  ],
};
