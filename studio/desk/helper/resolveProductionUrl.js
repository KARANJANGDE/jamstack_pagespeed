// ./studio/resolveProductionUrl.js
import queryString from "query-string";
import { client } from "./client";
import { createRandomUUID } from "./uuid";
import { enviornment } from "../../lib/constants";
const { ENV_DEV, ENV_PROD } = enviornment;
// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
// const previewSecret = 'j8heapkqy4rdz6kudrvsc7ywpvfhrv022abyx5zgmuwpc1xv'

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://jamstacky-development.vercel.app`;
const localUrl = `http://localhost:3000`;

// export default async function resolveProductionUrl(doc) {
//   const baseUrl = window.location.hostname === 'localhost' ? localUrl : remoteUrl
// //   const baseUrl = remoteUrl

//   const previewUrl = new URL(baseUrl)

//   previewUrl.pathname = doc?.slug?.current ?? `/`
//   previewUrl.searchParams.append(`preview`, previewSecret)
// //   previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`)

//   return previewUrl.toString()
// }
const previewSecret = "preview.secret";
const query = (ttl) => /* groq */ `
  *[_id == $id && dateTime(_updatedAt) > dateTime(now()) - ${ttl}][0].secret
`;
const getSecret = async (createIfNotExists) => {
  const ttl = createIfNotExists ? 60 * 30 : 60 * 60;

  const secret = await client.fetch(query(ttl), { id: previewSecret });
  if (!secret && createIfNotExists) {
    const newSecret =
      createIfNotExists === true ? createRandomUUID() : createIfNotExists();

    try {
      const patch = client.patch(previewSecret).set({ secret: newSecret });

      await client
        .transaction()
        .createIfNotExists({
          _id: previewSecret,
          _type: previewSecret,
        })
        .patch(patch)
        .commit({ tag: previewSecret });
      return newSecret;
    } catch (err) {}
  }

  return secret;
};
const getBaseUrl = (env = ENV_DEV) => {
  if (env === ENV_PROD) {
    return `https://jamstacky-development.vercel.app`;
  }

  return "http://localhost:3000";
};

const createPreviewUrl = ({ baseUrl, query }) => {
  const previewApiRoute = "/api/draft";
  return decodeURIComponent(`${baseUrl + previewApiRoute}?${query}`);
};

const getPreviewUrl = async ({ _type, slug }) => {
  const baseUrl = getBaseUrl(process.env.NODE_ENV);
  let previewRoute = "";
  switch (_type) {
    case "all_page":
      previewRoute = !slug.current.startsWith("/")
        ? `/${slug.current}`
        : slug.current;
      break;
    case "blog_detail_page":
      previewRoute = !slug.current.startsWith("/")
        ? `/blog/${slug.current}`
        : `/blog/${slug.current}`;
      break;
    case "case_study_detail_page":
      previewRoute = !slug.current.startsWith("/")
        ? `/case-studies/${slug.current}`
        : `/case-studies/${slug.current}`;
      break;
    case "case_study_page":
      previewRoute = !slug.current.startsWith("/")
        ? `/${slug.current}`
        : slug.current;
      break;
    case "blog_page":
      previewRoute = !slug.current.startsWith("/")
        ? `/${slug.current}`
        : slug.current;
      break;
    case "book_consultation_page":
      previewRoute = !slug.current.startsWith("/")
        ? `/${slug.current}`
        : slug.current;
      break;
    case "comparision_main_page":
      previewRoute = !slug.current.startsWith("/")
        ? `/${slug.current}`
        : slug.current;
      break;
    case "home": {
      previewRoute = "/";
      break;
    }
    default:
  }

  if (!previewRoute) {
    return;
  }
  const secret = await getSecret(true);
  const urlQueryParams = {
    redirect: previewRoute,
    secret,
  };

  const stringifiedUrlQueryParams = queryString.stringify(urlQueryParams);

  const previewUrl = createPreviewUrl({
    baseUrl,
    query: stringifiedUrlQueryParams,
  });
  return previewUrl;
};
export default function resolveProductionUrl(document = {}) {
  return getPreviewUrl(document);
}
