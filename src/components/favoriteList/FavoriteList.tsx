import ArticleItem from 'components/articleItem/ArticleItem';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import { Typography } from '@mui/material';

function FavoriteList() {
  const favoriteArticles = useTypedSelector((state) => state.favoriteSlice);

  return favoriteArticles.length !== 0 ? (
    <div className="grid-container fade-in">
      {favoriteArticles?.map((article) => (
        article && (
        <div className="grid-item" key={uuidv4()}>
          <ArticleItem key={article.id} article={article} />
        </div>
        )
      ))}
    </div>
  ) : (
    <>
      <Typography variant="body1">
        No articles found
      </Typography>

      <Typography variant="body1">
        Please add article to favorite
      </Typography>
    </>
  );
}
export default FavoriteList;
