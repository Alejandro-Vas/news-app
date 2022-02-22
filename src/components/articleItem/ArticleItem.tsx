import { Typography, Link } from "@mui/material";
import FavoriteStar from "components/favoriteStar/FavoriteStarWrapper";
import KeywordsItem from "components/keywordsItem/KeywordsItem";

import { DocsEntity } from "../../interfaces/IArticleSearchInterface";
interface IProps {
  article: DocsEntity;
}

const ArticleItem: React.FC<IProps> = (props) => {
  const { article } = props;

  return (
    <div className="fade-in">
      <div className="article__favorite">
        <FavoriteStar article={article} />
      </div>

      <Typography variant="subtitle1" gutterBottom component="div">
        {article.headline.main}
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
        {article.abstract}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {article.lead_paragraph}
      </Typography>
      <div className="article__link">
        <Link
          href={article.web_url}
          target="_blank"
          rel="noreferrer"
          mt={"10px"}
        >
          See on www.nytimes.com
        </Link>
      </div>

      {/* <div>{articleDate}</div> */}
      <div className="article__img">
        <img
          className="article-img"
          alt="article"
          src={"https://www.nytimes.com/" + article.multimedia![5].url}
          loading="lazy"
        />
      </div>

      <div>
        <div className="keywords-wrapper">
          {article.keywords
            ?.filter((_, index) => index < 5)
            .map((keyword) => {
              return (
                <div
                  className="keywords-item"
                  key={article.web_url + keyword.value}
                >
                  <KeywordsItem keyword={keyword.value} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ArticleItem;
