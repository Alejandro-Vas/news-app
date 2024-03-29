export interface Legacy {
  xlarge?: string | null;
  xlargewidth?: number | null;
  xlargeheight?: number | null;
  thumbnail?: string | null;
  thumbnailwidth?: number | null;
  thumbnailheight?: number | null;
  widewidth?: number | null;
  wideheight?: number | null;
  wide?: string | null;
}
export interface Headline {
  main: string;
  kicker?: string | null;
  content_kicker?: null;
  print_headline?: string | null;
  name?: null;
  seo?: null;
  sub?: null;
}
export interface MultimediaEntity {
  rank: number;
  subtype: string;
  caption?: null;
  credit?: null;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: Legacy;
  subType: string;
  crop_name: string;
}
export interface KeywordsEntity {
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface PersonEntity {
  firstname: string;
  middlename?: string | null;
  lastname: string;
  qualifier?: null;
  title?: null;
  role: string;
  organization: string;
  rank: number;
}

export interface Byline {
  original: string;
  person?: (PersonEntity | null)[] | null;
  organization?: string | null;
}

export interface ResponseDocsEntity {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  print_section?: string | null;
  print_page?: string | null;
  source: string;
  multimedia?: MultimediaEntity[] | null | undefined;
  headline: Headline;
  keywords?: KeywordsEntity[] | null;
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  subsection_name?: string | null;
  byline: Byline;
  type_of_material: string;
  word_count: number;
  uri: string;
  _id: string
}

export interface DocsEntity extends ResponseDocsEntity {
  id: string
  code: string
}

export interface Meta {
  hits: number;
  offset: number;
  time: number;
}

export interface Response {
  docs?: ResponseDocsEntity[] | null;
  meta: Meta;
}

export interface TransformedResponse {
  docs?: DocsEntity[] | null;
  meta: Meta;
}

export interface IArticleSearchResponse {
  status: string;
  copyright: string;
  response: Response;
}

export interface IArticleSearch {
  status: string;
  copyright: string;
  response: TransformedResponse;
}
