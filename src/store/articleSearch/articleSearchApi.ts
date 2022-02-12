import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticleSearch } from "interfaces/IArticleSearchInterface";

import { apiKey } from "../apiKey";

export const articleSearchApi = createApi({
  reducerPath: "api/articleSearch",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nytimes.com/svc/search/v2",
  }),
  endpoints: (builder) => ({
    getArticleSearch: builder.query<IArticleSearch, string>({
      query: (query = "IT") =>
        `articlesearch.json?q=${query}&api-key=${apiKey}`,
    }),
  }),
});

export const { useGetArticleSearchQuery } = articleSearchApi;
