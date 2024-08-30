import { handleSanityRequestError } from "@/lib/sanity/utils";
import { groq } from "next-sanity";

const groqQuery = groq`{
  "slugs" : array::unique(*[_type=="framework" && defined(slug.current)]{
  "possibleFrameworks" : *[_type=="framework" && type.type._ref==^.type.type._ref && slug.current != ^.slug.current]{
    "slug" : array::join(string::split(array::join([^.slug.current, slug.current], '-vs-'), "/")[@ != "frameworks"], ""),
  }[].slug
}[].possibleFrameworks[])
}`;

const handleError = (error: Error, mockData: unknown = undefined) =>
  handleSanityRequestError({
    error,
    mockData,
  });

export const query = {
  groqQuery,
  handleError,
};
