import S from "@sanity/desk-tool/structure-builder";

export const structureListAll = S.listItem()
	.title("All Document Types")
	.child(
		S.list()
			.title("All Types")
			.items([
				/* This returns an array of all the document types defined in the schema.*/
				...S.documentTypeListItems(),
			]),
	);
