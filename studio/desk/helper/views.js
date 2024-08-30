import S from "@sanity/desk-tool/structure-builder";
import { EditIcon, EyeOpenIcon } from "@sanity/icons";
import Iframe from "sanity-plugin-iframe-pane";
import resolveProductionUrl from "./resolveProductionUrl";

export const viewsOptions = [
  S.view.form().icon(EditIcon),
  S.view
    .component(Iframe)
    .options({
      url: (doc) => {
        return resolveProductionUrl(doc);
      },
      reload: {
        button: true, // default `undefined`
        revision: true, // default `undefined`
      },
    })
    .title("Preview")
    .icon(EyeOpenIcon),
];

export const views = (documentId, type)=>{
    return S.document({id : documentId}).schemaType(type).views(viewsOptions)
}