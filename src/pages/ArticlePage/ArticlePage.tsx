import {
  Typography, Box, Paper, Link, IconButton,
} from '@mui/material';
import { useGetArticleSearchQuery } from 'store/articleSearch/articleSearchApi';
import { useNavigate, useParams } from 'react-router-dom';
import Favorite from 'components/favorite/Favorite';
import noImage from 'assets/noImage.png';
import { SyntheticEvent } from 'react';
import KeywordsItem from 'components/keywordsItem/KeywordsItem';
import Loader from 'components/Loader/index';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from './styles';

function BackButton() {
  const navigate = useNavigate();
  return (
    <IconButton
      color="primary"
      size="large"
      onClick={() => navigate('/')}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
}

function ArticlePage() {
  const { code = '' } = useParams();

  const { data, isLoading } = useGetArticleSearchQuery(code);

  const article = data?.response?.docs?.[0];

  const {
    multimedia,
    headline,
    web_url: webUrl,
    keywords,
    pub_date: date,
    abstract,
    lead_paragraph: leadParagraph,
  } = article || {};

  const imageUrl = multimedia?.[11] ? multimedia[11].url : null;

  const url = imageUrl ? `https://www.nytimes.com/${imageUrl}` : noImage;

  const onImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = noImage;
  };

  if (isLoading) {
    return (
      <>
        <BackButton />
        <Loader />
      </>

    );
  }

  if (!article) {
    return <BackButton />;
  }

  return (
    <Box sx={{ height: '95vh' }}>
      <BackButton />

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
              component="h2"
              gutterBottom
            >
              {headline?.main}
            </Typography>
          </div>

          <Favorite article={article} />
        </Box>

        <Typography
          component="h4"
          sx={styles.abstract}
        >
          {abstract}
        </Typography>

        <Box sx={styles.imageWrapper}>

          <Box
            component="img"
            sx={styles.image}
            alt="article"
            src={url}
            loading="lazy"
            onError={onImageError}
          />
        </Box>

        <Typography>
          {leadParagraph}
        </Typography>

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
          {keywords?.map((keyword, i) => (
            <KeywordsItem
              keyword={keyword.value}
              // eslint-disable-next-line react/no-array-index-key
              key={i}
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
export default ArticlePage;