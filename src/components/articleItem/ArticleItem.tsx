import KeywordsItem from "components/keywordsItem/KeywordsItem";

import { DocsEntity } from "../../interfaces/IArticleSearchInterface";
interface IProps {
  article: DocsEntity;
}

const ArticleItem: React.FC<IProps> = (props) => {
  const { article } = props;
  return (
    <div>
      <div>
        <h2>{article.headline.main}</h2>
      </div>
      <div>{article.abstract}</div>
      <div>{article.pub_date}</div>
      <div>
        <img
          className="article-img"
          alt="article"
          src={"https://www.nytimes.com/" + article.multimedia![5].url}
          loading="lazy"
        />
      </div>
      <div>
        <a href={article.web_url}>NYT Link</a>
      </div>
      <div>
        <div className="keywords-wrapper">
          {article.keywords
            ?.filter((_, index) => index < 5)
            .map((keyword) => {
              return (
                <div className="keywords-item">
                  <KeywordsItem
                    key={article.web_url + keyword.value}
                    keyword={keyword.value}
                  />
                </div>
              );
            })}
        </div>
      </div>

      <hr />
    </div>
  );
};
export default ArticleItem;
