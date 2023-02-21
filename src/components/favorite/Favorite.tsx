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
    .find((favArticle) => article.id === favArticle?.id))

  const favorites = useTypedSelector((state) => state.favorite.favoriteArticles
    .find((favArticle) => article.id === favArticle?.id))

  const { addFavorite } = useActions()

  console.log('!!!favorites', favorites)

  const handleToggleFavorite = () => {
    addFavorite(article)
  }

  const Icon = isFavorite ? Bookmark : BookmarkBorder
  return (
    <div>
      <Tooltip title="Remove from favorites">
        <Icon
          color="primary"
          fontSize="large"
          onClick={handleToggleFavorite}
        />
      </Tooltip>
    </div>
  );
}
export default Favorite;
