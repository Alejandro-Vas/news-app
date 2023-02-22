import { Typography, Box } from '@mui/material';
import { useGetArticleSearchQuery } from 'store/articleSearch/articleSearchApi';
import { useParams } from 'react-router-dom';
import ArticleItem from 'components/articleItem/ArticleItem';

function ArticlePage() {
  const { code = '' } = useParams()
  const {
    data, isFetching, isLoading,
  } = useGetArticleSearchQuery(code);

  return (
    <Box sx={{ height: '95vh' }}>
      <Typography variant="subtitle1" component="div">
        ArticlePage
      </Typography>
      {data?.response?.docs?.[0].headline.main}

      {data?.response?.docs?.[0] && (<ArticleItem article={data?.response?.docs?.[0]} />)}
    </Box>
  );
}
export default ArticlePage;
