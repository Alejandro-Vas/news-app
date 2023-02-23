import {
  Typography, Link, Box, Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Favorite from 'components/favorite/Favorite';
import KeywordsItem from 'components/keywordsItem/KeywordsItem';
import noImage from 'assets/noImage.png';
import { memo, SyntheticEvent } from 'react';
import { DocsEntity } from '../../interfaces/IArticleSearchInterface';
import styles from './styles';

interface IProps {
  article: DocsEntity;
}

function ArticleItem({ article }:IProps) {
  const navigate = useNavigate();

  const {
    multimedia, headline, web_url: webUrl, keywords, pub_date: date, code,
  } = article || {};
  const imageUrl = multimedia?.[5] ? multimedia[5].url : null;

  const url = imageUrl ? `https://www.nytimes.com/${imageUrl}` : noImage;

  const onImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = noImage;
  };

  const onGoToArticle = () => {
    if (code) {
      navigate(`/article/${encodeURIComponent(code)}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
            onClick={onGoToArticle}
            sx={styles.header}
            component="h3"
            variant="h4"
            gutterBottom
          >
            {headline.main}
          </Typography>
        </div>

        <Favorite article={article} />

      </Box>

      <Box
        sx={styles.imageWrapper}
        onClick={onGoToArticle}
      >
        <Box
          component="img"
          sx={styles.image}
          alt="article"
          src={url}
          loading="lazy"
          onError={onImageError}
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
          .map((keyword, i) => (
            <KeywordsItem
              keyword={keyword.value}
              // eslint-disable-next-line react/no-array-index-key
              key={i}
            />
          ))}
      </Box>
    </Paper>
  );
}
export default memo(ArticleItem);
