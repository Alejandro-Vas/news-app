import ArticleItem from 'components/ArticleItem';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Typography, Grid } from '@mui/material';

function FavoriteList() {
  const { favoriteArticles = [] } = useTypedSelector((state) => state.favorite);

  if (favoriteArticles.length === 0) {
    return (
      <>
        <Typography sx={{ mt: 2 }}>
          No articles found
        </Typography>

        <Typography>
          Please add article to favorite
        </Typography>
      </>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: 2 }}
    >
      {favoriteArticles.map((article) => (
        article && (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={article.id}
        >
          <ArticleItem article={article} />
        </Grid>
        )
      ))}
    </Grid>
  );
}
export default FavoriteList;
