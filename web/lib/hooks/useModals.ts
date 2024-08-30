import constate from "constate";
import { useState } from "react";
import { ReadblogType } from "../sanity/types/blog";

export const [ModalsProvider, useModals] = constate(() => {
  const [blog, setBlog] = useState<ReadblogType[]>();

  return {
    data: blog,
    setBlog,
  };
});
