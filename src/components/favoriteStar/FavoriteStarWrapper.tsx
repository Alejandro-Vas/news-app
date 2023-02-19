import useActions from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import FavoriteStar from './FavoriteStar';
import NoFavoriteStar from './NoFavoriteStar';

import { DocsEntity } from '../../interfaces/IArticleSearchInterface';

interface IProps {
  article?: DocsEntity;
}

function FavoriteStarWrapper({ article }:IProps) {
  const { addFavorite, removeFavorite } = useActions();
  const favoriteState = useTypedSelector((state) => state.favoriteSlice);
  const favoriteId = favoriteState.filter((el) => el.id === article?.id);

  const handleAddFavorite = () => {
    const filteredState = favoriteState.filter((el) => el.id === article?.id);
    if (filteredState[0]?.id !== article?.id) {
      addFavorite(article);
    }
  };

  const handleRemoveFavorite = () => {
    if (favoriteState.length !== 0) {
      removeFavorite(article?.id);
    }
  };

  return (
    favoriteId.length !== 0 ? (
      <div onClick={handleRemoveFavorite}>
        <FavoriteStar />
      </div>
    ) : (
      <div onClick={handleAddFavorite}>
        <NoFavoriteStar />
      </div>
    )
  );
}

export default FavoriteStarWrapper;
