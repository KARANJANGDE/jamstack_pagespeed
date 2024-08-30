import S from "@sanity/desk-tool/structure-builder";
import { HiOutlineTerminal } from "react-icons/hi";
import { views } from "./views";
//import { createSuperPane } from "sanity-super-pane";

export const structureListType = ({
	title,
	type,
	icon = HiOutlineTerminal,
	filter,
}) => {
	if (filter) {
		return S.listItem().title(title).icon(icon).child(
			S.documentList().title(title).schemaType(type).filter(filter).child((documentId) => views(documentId)),
		);
	}

	return S.listItem().title(title).icon(icon).child(
		//createSuperPane(type),
		S.documentTypeList(type).title(title).child((documentId)=>views(documentId , type)),
		//.child((documentId) => views(documentId)),
	);
};
/*
createSuperPane(type, S)


import S from '@sanity/desk-tool/structure-builder';
import { createSuperPane } from 'sanity-super-pane';

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem().title('Normal List').child(createSuperPane('movie', S)),
    ]); */
