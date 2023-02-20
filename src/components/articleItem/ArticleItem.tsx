import {
  Typography, Link, Box, Paper,
} from '@mui/material';
import Favorite from 'components/favorite/FavoriteWrapper';
import KeywordsItem from 'components/keywordsItem/KeywordsItem';
import { DocsEntity } from '../../interfaces/IArticleSearchInterface';
import styles from './styles';

interface IProps {
  article: DocsEntity;
}

function ArticleItem({ article }:IProps) {
  const {
    multimedia, headline, web_url: webUrl, keywords,
  } = article || {}
  const imageUrl = multimedia?.[5] ? multimedia[5].url : ''

  if (!imageUrl) {
    return null
  }

  return (
    <Paper
      sx={styles.paper}
      elevation={3}
    >

      <Typography
        sx={styles.header}
        component="h3"
        gutterBottom
      >
        {headline.main}
      </Typography>

      <Box sx={styles.imageWrapper}>
        <Box sx={styles.favorite}>
          <Favorite article={article} />
        </Box>

        <Box
          component="img"
          sx={styles.image}
          alt="article"
          src={`https://www.nytimes.com/${imageUrl}`}
          loading="lazy"
        />
      </Box>

      <Box sx={styles.link}>
        <Link
          href={webUrl}
          target="_blank"
          rel="noreferrer"
        >
          See on www.nytimes.com
        </Link>
      </Box>

      <Box sx={styles.keywords}>
        {keywords
          ?.slice(0, 5)
          .map((keyword) => (
            <KeywordsItem
              keyword={keyword.value}
              key={webUrl + keyword.value}
            />
          ))}
      </Box>
    </Paper>
  );
}
export default ArticleItem;
