import ArticleItem from 'components/articleItem/ArticleItem';
import Skeleton from 'components/skeleton/Skeleton';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useGetArticleSearchQuery } from 'store/articleSearch/articleSearchApi';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';

function ArticleList() {
  const articleSearchQuery = useTypedSelector(
    (state) => state.articleSearchQuery.value,
  );
  const {
    data, isSuccess, isLoading, isFetching,
  } = useGetArticleSearchQuery(articleSearchQuery);

  if (isLoading) {
    return (
      <Box sx={{ margin: '0 auto', textAlign: 'center' }}>
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
    <div>
      {isSuccess && !isLoading && (
        <div className="grid-container">
          {data?.response?.docs?.map((article) => (
            article
              && typeof article?.multimedia![5] !== 'undefined' && (
                <div className="grid-item" key={uuidv4()}>
                  {!isLoading && !isFetching ? (
                    <ArticleItem key={article.id} article={article} />
                  ) : (
                    <Skeleton key={uuidv4()} />
                  )}
                </div>
            )
          ))}
        </div>
      )}
    </div>
  );
}
export default ArticleList;
