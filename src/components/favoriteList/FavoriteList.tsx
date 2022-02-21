import ArticleItem from "components/articleItem/ArticleItem";
import { useTypedSelector } from "hooks/useTypedSelector";
import { v4 as uuidv4 } from "uuid";
import { Typography } from "@mui/material";

const FavoriteList = () => {
  const favoriteArticles = useTypedSelector((state) => state.favoriteSlice);

  return favoriteArticles.length !== 0 ? (
    <div className="grid-container fade-in">
      {favoriteArticles?.map((article) => {
        return (
          article && (
            <div className="grid-item" key={uuidv4()}>
              <ArticleItem key={article._id} article={article} />
            </div>
          )
        );
      })}
    </div>
  ) : (
    <Typography variant="h4" component="div">
      Please add articles to favorite
    </Typography>
  );
};
export default FavoriteList;
