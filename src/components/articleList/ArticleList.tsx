import ArticleItem from 'components/articleItem/ArticleItem';
import Skeleton from 'components/skeleton/Skeleton';
import { Grid } from '@mui/material';
import { useGetArticleSearchQuery } from 'store/articleSearch/articleSearchApi';
import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';
import Loader from 'components/Loader';

interface IArticleListProps {
    searchQuery: string;
}

function ArticleList({ searchQuery }: IArticleListProps) {
  const {
    data, isFetching, isLoading,
  } = useGetArticleSearchQuery(searchQuery);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: 2, minHeight: '95vh' }}
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
  );
}
export default memo(ArticleList);
