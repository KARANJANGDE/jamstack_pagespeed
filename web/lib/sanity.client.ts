import { apiVersion, dataset, projectId, useCdn } from "@/lib/sanity.api";
import {
  blogSlugsQuery,
  casestudiesSlugsQuery,
  categorySlugsQuery,
} from "@/lib/sanity.queries";
import { createClient, type SanityClient } from "next-sanity";
import { BlogDetailPageType } from "./sanity/types/blog";
import { CaseStudy } from "./sanity/types/caseStudy";
import { Category } from "./sanity/types";

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: "published",
  });
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}

export async function getAllCategoriesSlugs(): Promise<
  Pick<Category, "slug">[]
> {
  const client = getClient();
  const slugs =
    (await client.fetch<Pick<Category, "slug">[]>(categorySlugsQuery)) || [];
  return slugs;
}

export async function getAllCaseStudySlugs(): Promise<
  Pick<CaseStudy, "slug">[]
> {
  const client = getClient();
  const slugs = (await client.fetch<string[]>(casestudiesSlugsQuery)) || [];
  return slugs.map((slug) => ({ slug }));
}

export async function getAllBlogsSlugs(): Promise<
  Pick<BlogDetailPageType, "slug">[]
> {
  const client = getClient();
  const slugs = (await client.fetch<string[]>(blogSlugsQuery)) || [];
  return slugs.map((slug) => ({ slug }));
}
