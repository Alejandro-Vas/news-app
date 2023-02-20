import ArticleItem from 'components/articleItem/ArticleItem';
import Skeleton from 'components/skeleton/Skeleton';
import {
  Box, Typography, CircularProgress, Grid,
} from '@mui/material';
import { useGetArticleSearchQuery } from 'store/articleSearch/articleSearchApi';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';

function ArticleList() {
  const articleSearchQuery = useTypedSelector(
    (state) => state.articleSearchQuery.value,
  );
  const {
    data, isFetching, isLoading,
  } = useGetArticleSearchQuery(articleSearchQuery);

  if (isLoading) {
    return (
      <Box sx={{
        margin: '0 auto',
        textAlign: 'center',
      }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4,
        }}
        >
          <CircularProgress size={64} />
        </Box>

        <Typography
          variant="subtitle1"
          component="div"
          sx={{ mt: 2 }}
        >
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: 2 }}
    >
      {data?.response?.docs
        ?.filter((article) => !!article.multimedia?.[5])
        .map((article) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={uuidv4()}
          >
            {isFetching
              ? (
                <Skeleton />
              ) : (
                <ArticleItem article={article} />
              )}
          </Grid>
        ))}
    </Grid>
  )
}
export default ArticleList;
