import FavoriteStar from "./FavoriteStar";
import NoFavoriteStar from "./NoFavoriteStar";

import useActions from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";

import { DocsEntity } from "./../../interfaces/IArticleSearchInterface";
import { ReactNode } from "react";

interface IProps {
  article?: DocsEntity;
  children?: ReactNode;
}

const FavoriteStarWrapper: React.FC<IProps> = (props) => {
  const { article } = props;
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
};

export default FavoriteStarWrapper;
