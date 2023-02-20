import {
  Typography, Link, Box, Paper,
} from '@mui/material';
import FavoriteStar from 'components/favoriteStar/FavoriteStarWrapper';
import KeywordsItem from 'components/keywordsItem/KeywordsItem';
import { DocsEntity } from '../../interfaces/IArticleSearchInterface';

interface IProps {
  article: DocsEntity;
}

function ArticleItem({ article }:IProps) {
  const imageUrl = article?.multimedia?.[5] ? article.multimedia[5].url : ''

  if (!imageUrl) {
    return null
  }

  return (
    <Paper
      sx={{ p: 2 }}
      elevation={2}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'end',
      }}
      >
        <FavoriteStar article={article} />
      </Box>

      <Typography variant="subtitle1" gutterBottom component="div">
        {article.headline.main}
      </Typography>

      <div className="article__img">
        <img
          className="article-img"
          alt="article"
          src={`https://www.nytimes.com/${imageUrl}`}
          loading="lazy"
        />
      </div>

      <Box sx={{ mb: 1 }}>
        <Link
          href={article.web_url}
          target="_blank"
          rel="noreferrer"
          mt="10px"
        >
          See on www.nytimes.com
        </Link>
      </Box>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
      }}
      >
        {article.keywords
          ?.slice(0, 5)
          .map((keyword) => (
            <div
              className="keywords-item"
              key={article.web_url + keyword.value}
            >
              <KeywordsItem keyword={keyword.value} />
            </div>
          ))}
      </Box>
    </Paper>
  );
}
export default ArticleItem;
