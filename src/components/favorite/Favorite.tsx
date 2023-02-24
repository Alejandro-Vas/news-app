import Bookmark from '@mui/icons-material/Bookmark';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import { Tooltip } from '@mui/material';
import useActions from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { DocsEntity } from 'interfaces/IArticleSearchInterface';

interface IFavoriteProps {
  article: DocsEntity;
}

function Favorite({ article } : IFavoriteProps) {
  const isFavorite = useTypedSelector((state) => state.favorite.favoriteArticles
    .find((favArticle) => article.id === favArticle?.id));

  const { addFavorite, removeFavorite, enqueueSnackbar } = useActions();

  const handleToggleFavorite = () => {
    if (!isFavorite) {
      addFavorite(article);
      enqueueSnackbar({
        message: 'Added to favorites',
        options: {
          variant: 'info',
        },
      });
    } else {
      removeFavorite(article.id);
      enqueueSnackbar({
        message: 'Removed from favorites',
        options: {
          variant: 'warning',
        },
      });
    }
  };

  const Icon = isFavorite ? Bookmark : BookmarkBorder;
  const title = isFavorite ? 'Remove from favorites' : 'Add to Favorites';
  return (
    <Tooltip title={title}>
      <div>
        <Icon
          color="primary"
          fontSize="large"
          onClick={handleToggleFavorite}
        />
      </div>
    </Tooltip>
  );
}
export default Favorite;
