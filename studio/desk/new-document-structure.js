import S from "@sanity/base/structure-builder";
import { templateBuilders } from "./initial-value-templates";

export const initialValueTemplates = templateBuilders.map((template) =>
	S.initialValueTemplateItem(template.id).id(template.id).title(template.title),
);

export default [
	...initialValueTemplates,
	//...S.defaultInitialValueTemplateItems()
];
