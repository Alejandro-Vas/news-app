import ArticleItem from 'components/articleItem/ArticleItem';
import Skeleton from 'components/skeleton/Skeleton';
import {
  Box, Button, Grid, Typography,
} from '@mui/material';
import { useGetArticleSearchQuery } from 'store/api/articleSearchApi';
import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';
import Loader from 'components/Loader';
import useActions from 'hooks/useActions';
import { useNavigate } from 'react-router-dom';
import searchTags from 'constants/searchTags';

const styles = {
  container: {
    '& > *': {
      mt: 1,
    },
  },
};
interface IArticlesListProps {
    searchQuery: string;
}

function ArticlesList({ searchQuery }: IArticlesListProps) {
  const { setSearchQuery, setSearchInputText } = useActions();
  const navigate = useNavigate();

  const handleClick = () => {
    const randomArticleQuery = searchTags[Math.floor(Math.random() * searchTags.length)];
    setSearchInputText(randomArticleQuery);
    setSearchQuery(randomArticleQuery);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const {
    data, isFetching, isLoading, isError,
  } = useGetArticleSearchQuery(searchQuery);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (isFetching) {
    return (
      <Skeleton />
    );
  }

  if (isError) {
    return (
      <Box sx={styles.container}>
        <Typography variant="h3">
          An error occurred
        </Typography>

        <Typography variant="h4">
          Try again later
        </Typography>
      </Box>
    );
  }

  if (!data?.response?.docs?.length && !isError) {
    return (
      <Box sx={styles.container}>
        <Typography variant="h3">
          Nothing has found
        </Typography>

        <Typography variant="h4">
          You can use AI random search query generator
        </Typography>

        <Button onClick={handleClick}>
          TRY!
        </Button>
      </Box>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: 1 }}
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
export default memo(ArticlesList);
