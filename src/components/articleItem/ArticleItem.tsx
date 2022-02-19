import { Typography, Link } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import KeywordsItem from "components/keywordsItem/KeywordsItem";
import StarIcon from "@mui/icons-material/Star";
import { unixTimeConverter } from "helpers/unixTimeConverter";
import { DocsEntity } from "../../interfaces/IArticleSearchInterface";
interface IProps {
  article: DocsEntity;
}

const ArticleItem: React.FC<IProps> = (props) => {
  const { article } = props;
  console.log(article.pub_date);
  const articleDate = Date.parse(article.pub_date);

  return (
    <div className="fade-in">
      <div className="article__favorite">
        <StarBorderIcon
          className="favorite__article__item"
          color="primary"
          fontSize="large"
        />
        <StarIcon
          onClick={() => console.log("aaa")}
          className="favorite__article__item"
          color="primary"
          fontSize="large"
        />
      </div>
      <Typography variant="h4" gutterBottom component="div">
        {article.headline.main}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {article.abstract}
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
