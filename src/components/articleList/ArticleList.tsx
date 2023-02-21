import ArticleItem from 'components/articleItem/ArticleItem';
import Skeleton from 'components/skeleton/Skeleton';
import {
  Box, Typography, CircularProgress, Grid,
} from '@mui/material';
import { useGetArticleSearchQuery } from 'store/articleSearch/articleSearchApi';
import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';

interface IArticleListProps {
    searchQuery: string;
}

function ArticleList({ searchQuery }: IArticleListProps) {
  const {
    data, isFetching, isLoading,
  } = useGetArticleSearchQuery(searchQuery);

  if (isLoading) {
    return (
      <Box sx={{
        margin: '0 auto',
        textAlign: 'center',
        minHeight: '100vh',
        mt: 10,
      }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

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
      sx={{ mt: 2, minHeight: '100vh' }}
    >
      {data?.response?.docs?.map((article) => (
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
export default memo(ArticleList);
