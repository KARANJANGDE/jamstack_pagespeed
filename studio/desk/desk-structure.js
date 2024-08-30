import S from "@sanity/desk-tool/structure-builder";
import {
  BlockElementIcon,
  CogIcon,
  EditIcon,
  EyeOpenIcon,
} from "@sanity/icons";
import Iframe from "sanity-plugin-iframe-pane";
import { createSuperPane } from "sanity-super-pane";
import { CiSettings } from "react-icons/ci";
import { OLD_PAGE_ID_LIST } from "./initial-value-templates/helper/defaults";
import { structureListAll } from "./helper/structure-list-all";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiGroupLine, RiPagesFill, RiPagesLine } from "react-icons/ri";
import {
  HiOutlineDocumentSearch,
  HiChat,
  HiOutlineAnnotation,
  HiOutlineBriefcase,
} from "react-icons/hi";
import { SiMicrodotblog } from "react-icons/si";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { FaRocketchat } from "react-icons/fa";
import { TbHeading } from "react-icons/tb";
import { structureListType } from "./helper/structure-list-type";
import resolveProductionUrl from "./helper/resolveProductionUrl";
import { views } from "./helper/views";
import { InitialValueTemplates, getPageId } from "./initial-value-templates";

const excluded_documents = [
  "framework",
  "header",
  "footer",
  "footer_banner",
  "home",
  "author_section",
  "case_study_detail_page",
  "all_page",
  "case_study_page",
  "comparison_tools_page",
  "blog_hero_section",
  "blog_featured_post_section",
  "choose_jamstacky_section",
  "blog_all_posts_section",
  "price_section",
  "news_letter",
  "title_description_side_image_Section",
  "estimatePage",
  "four_o_four_page",
  "hireDedicatedPage",
  "privacy_policy",
  "thank_you_page",
  "blog_page",
  "blog_detail_page",
  "casestudy_bestwork_section",
  "imagetitledetails",
  "hiring_request",
  "message_send_request",
  "category",
  "comparision_main_page"
];

const singleton_pages = [
  OLD_PAGE_ID_LIST["blog_page"],
  OLD_PAGE_ID_LIST["book_consultation_page"],
  OLD_PAGE_ID_LIST["case_study_page"],
  OLD_PAGE_ID_LIST["four_o_four"],
  OLD_PAGE_ID_LIST["home"],
  OLD_PAGE_ID_LIST["page_speed_page"],
  OLD_PAGE_ID_LIST["pricing_page"],
];

export default () =>
  S.list()
    .title("Documents")
    .items([
      S.listItem()
        .title("Global")
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title("Global")
            .items([
              structureListType({ title: "Header", type: "header" }),
              structureListType({ title: "Footer", type: "footer" }),
              S.divider(),
              structureListType({ title: "Author", type: "author_section" }),
              structureListType({
                title: "Why choose Jamstacky Section",
                type: "choose_jamstacky_section",
              }),
              structureListType({ title: "News Letter", type: "news_letter" }),
              structureListType({
                title: "Price Section",
                type: "price_section",
              }),
              structureListType({
                title: "Blog Detail Side Content",
                type: "blog_detail_side_content",
              }),
              structureListType({ title: "Category", type: "category" }),
              structureListType({
                title: "Compare Frameworks Section",
                type: "compare_frameworks_section",
              }),
            ])
        ),
      S.divider(),
      S.documentListItem()
      .title('Setting')
      .icon(CiSettings)
      .id(InitialValueTemplates.SETTING)
      .schemaType('setting'),
      S.divider(),
      S.listItem()
        .title("Site Pages (Unique)")
        .icon(RiPagesLine)
        .child(
          S.list()
            .title("Site Pages (Unique)")
            .items([
              S.documentListItem()
                .title("Home Page")
                .id(OLD_PAGE_ID_LIST["home"])
                .schemaType("home")
                .child((documentId) => views(documentId, "home")),
              S.documentListItem()
                .title("Case Study Index")
                .id(OLD_PAGE_ID_LIST["case_study_page"])
                .schemaType("case_study_page")
                .child((documentId) => views(documentId, "case_study_page")),
              S.documentListItem()
              .title("Comparision Main Page")
              .id(getPageId("comparision_main_page"))
              .schemaType("comparision_main_page")
              .child((documentId) => views(documentId, "comparision_main_page")),
              S.documentListItem()
                .title("Blog Index")
                .id(OLD_PAGE_ID_LIST["blog_page"])
                .schemaType("blog_page")
                .child((documentId) => views(documentId, "blog_page")),
              S.documentListItem()
                .title("Comparision Details")
                .id(getPageId("comparision_details_page"))
                .schemaType("comparision_details_page")
                .child((documentId) =>
                  views(documentId, "comparision_details_page")
                ),
              S.documentListItem()
                .title("404")
                .id(OLD_PAGE_ID_LIST["four_o_four"])
                .schemaType("all_page")
                .child((documentId) => views(documentId, "all_page")),
              S.documentListItem()
                .title("Page speed Page")
                .id(OLD_PAGE_ID_LIST["page_speed_page"])
                .schemaType("pagespeed")
                .child((documentId) => views(documentId, "pagespeed")),
              S.documentListItem()
                .title("Pricing")
                .id(OLD_PAGE_ID_LIST["pricing_page"])
                .schemaType("pricingPage")
                .child((documentId) => views(documentId, "pricingPage")),
              S.documentListItem()
                .title("Book Consultation Page")
                .id(OLD_PAGE_ID_LIST["book_consultation_page"])
                .schemaType("book_consultation_page")
                .child((documentId) =>
                  views(documentId, "book_consultation_page")
                ),
            ])
        ),
      S.listItem()
        .title("Site Pages (Custom)")
        .icon(RiPagesFill)
        .child(
          S.documentTypeList("all_page")
            .filter(
              `_type=="all_page" && !(_id in [${singleton_pages
                ?.map((i) => `"${i}"`)
                .join(",")}])`
            )
            .title("Site Pages (Custom)")
            .menuItems([
              ...S.documentTypeList("all_page").getMenuItems(),
              S.orderingMenuItem({
                title: "Publishing date new->old",
                by: [{ field: "_createdAt", direction: "desc" }],
              }),
              S.orderingMenuItem({
                title: "Publishing date old->new",
                by: [{ field: "_createdAt", direction: "asc" }],
              }),
            ])
            .child((documentId) => views(documentId, "all_page"))
        ),

      structureListType({
        type: "case_study_detail_page",
        title: "Case Studies",
        icon: HiOutlineDocumentSearch,
      }),
      structureListType({
        type: "blog_detail_page",
        title: "Blogs",
        icon: SiMicrodotblog,
      }),
      S.divider(),
      structureListType({
        type: "framework",
        title: "Frameworks",
        icon: BsFileEarmarkCodeFill,
      }),
      structureListType({
        type: "framework_type",
        title: "Types of Frameworks",
        icon: BsFileEarmarkCodeFill,
      }),
      structureListType({
        type: "hiring_request",
        title: "Hiring Requests",
        icon: FaRocketchat,
      }),
      structureListType({
        type: "testimonial_request",
        title: "Testimonial Requests",
        icon: FaRocketchat,
      }),
      structureListType({
        type: "message_send_request",
        title: "Messages",
        icon: HiChat,
      }),
      S.divider(),
      structureListType({
        type: "testimonial",
        title: "Testimonials",
        icon: HiOutlineAnnotation,
      }),
      structureListType({
        title: "Clients",
        type: "client",
        icon: HiOutlineBriefcase,
      }),
      structureListType({
        title: "Staff",
        type: "staff",
        icon: HiOutlineBriefcase,
      }),
      structureListType({
        title: "Plan",
        type: "plan",
      }),
      structureListType({
        title: "Packages",
        type: "package",
      }),
      process.env.NODE_ENV === "development" ? structureListAll : S.divider(),
      // ...S.documentTypeListItems().filter(
      //   (listItem) => !excluded_documents.includes(listItem.getId())
      // ),
    ]);
