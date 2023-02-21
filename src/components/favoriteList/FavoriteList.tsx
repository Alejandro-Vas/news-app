import ArticleItem from 'components/articleItem/ArticleItem';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Typography } from '@mui/material';

function FavoriteList() {
  const { favoriteArticles } = useTypedSelector((state) => state);

  return favoriteArticles.length !== 0 ? (
    <div>
      {favoriteArticles?.map((article) => (
        article && (
        <div className="grid-item" key={article.id}>
          <ArticleItem article={article} />
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
