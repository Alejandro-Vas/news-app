import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArticleSearch, IArticleSearchResponse } from 'interfaces/IArticleSearchInterface';
import { format } from 'date-fns';

import { API_KEY } from '../apiKey';

const transformResponse = (res: IArticleSearchResponse): IArticleSearch => ({
  ...res,
  response: {
    ...res.response,
    docs: res?.response.docs?.map((doc) => ({
      ...doc,
      // eslint-disable-next-line no-underscore-dangle
      id: doc._id,
      pub_date: format(new Date(doc.pub_date), 'd MMMM yyyy'),
      code: doc.headline?.main
        ?.split(' ')
        .join('-')
        .toLowerCase(),
    })),
  },
});

const API_URL = 'https://api.nytimes.com/';
// const API_URL_DEV = 'http://localhost:3000/'

export const articleSearchApi = createApi({
  reducerPath: 'api/articleSearch',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: (builder) => ({
    getArticleSearch: builder.query<IArticleSearch, string>({
      query: (query) => ({
        url: 'svc/search/v2/articlesearch.json',
        params: {
          q: query,
          'api-key': API_KEY,
        },
      }),
      transformResponse,
    }),
  }),
});

export const { useGetArticleSearchQuery } = articleSearchApi;
