import { Headline, KeywordsEntity } from "./IArticleSearchInterface";

export interface IFavorite {
  _id: string;
  web_url?: string;
  headline?: Headline;
  abstract?: string;
  keywords?: KeywordsEntity[] | null;
}
