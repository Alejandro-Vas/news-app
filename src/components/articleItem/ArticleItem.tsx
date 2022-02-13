import KeywordsItem from "components/tagItem/KeywordsItem";

import { DocsEntity } from "../../interfaces/IArticleSearchInterface";
interface IProps {
  article: DocsEntity;
}

const ArticleItem: React.FC<IProps> = (props) => {
  const { article } = props;
  return (
    <div>
      <div>{article._id}</div>
      <div>{article.headline.main}</div>
      <div>{article.abstract}</div>
      <div>{article.pub_date}</div>
      <div>
        <img
          alt="article"
          src={"https://www.nytimes.com/" + article.multimedia![5].url}
          loading="lazy"
        />
      </div>
      <div>
        <a href={article.web_url}>NYT Link</a>
      </div>
      <div>
        <ul>
          {article.keywords
            ?.filter((item, index) => index < 5)
            .map((keyword) => {
              return (
                <KeywordsItem
                  key={article.web_url + keyword.value}
                  keyword={keyword.value}
                />
              );
            })}
        </ul>
      </div>

      <hr />
    </div>
  );
};
export default ArticleItem;
