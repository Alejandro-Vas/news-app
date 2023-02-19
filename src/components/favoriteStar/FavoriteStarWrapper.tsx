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
  const favoriteId = favoriteState.filter((el) => el._id === article?._id);

  const handleAddFavorite = () => {
    const filteredState = favoriteState.filter((el) => el._id === article?._id);
    if (filteredState[0]?._id !== article?._id) {
      addFavorite(article!);
    }
  };

  const handleRemoveFavorite = () => {
    if (favoriteState.length !== 0) {
      removeFavorite(article?._id);
    }
  };

  return (
    <>
      {favoriteId.length !== 0 ? (
        <div onClick={handleRemoveFavorite}>
          <FavoriteStar />
        </div>
      ) : (
        <div onClick={handleAddFavorite}>
          <NoFavoriteStar />
        </div>
      )}
    </>
  );
}

export default FavoriteStarWrapper;
