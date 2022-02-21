import ArticleItem from "components/articleItem/ArticleItem";
import { useTypedSelector } from "hooks/useTypedSelector";
import { v4 as uuidv4 } from "uuid";

const FavoriteList = () => {
  const favoriteArticles = useTypedSelector((state) => state.favoriteSlice);

  return (
    <div>
      <div className="grid-container">
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
    </div>
  );
};
export default FavoriteList;
