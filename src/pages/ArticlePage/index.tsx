import {
  Typography, Box, Paper, Link,
} from '@mui/material';
import { useGetArticleSearchQuery } from 'store/api/articleSearchApi';
import { useParams } from 'react-router-dom';
import { SyntheticEvent } from 'react';
import useActions from 'hooks/useActions';
import Favorite from 'components/Favorite';
import KeywordsItem from 'components/KeywordsItem';
import Loader from 'components/Loader';
import BackButton from 'components/BackButton';
import noImage from 'assets/noImage.png';
import styles from './styles';

function ArticlePage() {
  const { code = '' } = useParams();

  const { enqueueSnackbar } = useActions();

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

  if (!article || !code) {
    enqueueSnackbar({
      message: 'Favorite list cleared',
      options: {
        variant: 'success',
      },
    });

    return <BackButton />;
  }

  return (
    <>
      <BackButton />

      <Paper
        sx={styles.paper}
        elevation={4}
      >

        {date}

        <Box sx={styles.headerWrapper}>
          <Typography
            sx={styles.header}
            component="h2"
            variant="h2"
          >
            {headline?.main}
          </Typography>

          <Favorite article={article} />
        </Box>

        <Box>
          <Typography
            component="h4"
            variant="h4"
          >
            {abstract}
          </Typography>
        </Box>

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

        <Box fontSize="h5.fontSize">
          {leadParagraph}
        </Box>

        <Box>
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
    </>
  );
}
export default ArticlePage;
