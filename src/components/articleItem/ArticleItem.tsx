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
          alt="article img"
          src={"https://www.nytimes.com/" + article.multimedia![0].url}
        />
      </div>
      <hr />
    </div>
  );
};
export default ArticleItem;
