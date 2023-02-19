import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArticleSearch, IArticleSearchResponse } from 'interfaces/IArticleSearchInterface';

import { apiKey } from '../apiKey';

const transformResponse = (res: IArticleSearchResponse): IArticleSearch => ({
  ...res,
  response: {
    ...res.response,
    docs: res?.response.docs?.map((doc) => ({
      ...doc,
      // eslint-disable-next-line no-underscore-dangle
      id: doc._id,
    })),
  },
})

export const articleSearchApi = createApi({
  reducerPath: 'api/articleSearch',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nytimes.com/svc/search/v2',
  }),
  endpoints: (builder) => ({
    getArticleSearch: builder.query<IArticleSearch, string>({
      query: (query) => ({
        url: 'articlesearch.json',
        params: {
          q: query,
          'api-key': apiKey,
        },
      }),
      transformResponse,
    }),
  }),
});

export const { useGetArticleSearchQuery } = articleSearchApi;
