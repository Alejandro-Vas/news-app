import {
  Typography, Link, Box, Paper,
} from '@mui/material';
import Favorite from 'components/favorite/FavoriteWrapper';
import KeywordsItem from 'components/keywordsItem/KeywordsItem';
import noImage from 'assets/noImage.png'
import { DocsEntity } from '../../interfaces/IArticleSearchInterface';
import styles from './styles';

interface IProps {
  article: DocsEntity;
}

function ArticleItem({ article }:IProps) {
  const {
    multimedia, headline, web_url: webUrl, keywords, pub_date: date,
  } = article || {}
  const imageUrl = multimedia?.[5] ? multimedia[5].url : null

  const url = imageUrl ? `https://www.nytimes.com/${imageUrl}` : noImage

  return (
    <Paper
      sx={styles.paper}
      elevation={4}
    >
      <Box>
        {date}
      </Box>
      <Box sx={styles.headerWrapper}>
        <div>
          <Typography
            sx={styles.header}
            component="h3"
            gutterBottom
          >
            {headline.main}
          </Typography>
        </div>

        <Favorite article={article} />

      </Box>

      <Box sx={styles.imageWrapper}>

        <Box
          component="img"
          sx={styles.image}
          alt="article"
          src={url}
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
