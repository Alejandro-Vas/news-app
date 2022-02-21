import FavoriteStar from "./FavoriteStar";
import NoFavoriteStar from "./NoFavoriteStar";

import useActions from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";

import { IFavorite } from "./../../interfaces/IFavorite";

interface IProps {
  article: IFavorite;
}

const FavoriteStarWrapper: React.FC<IProps> = (props) => {
  const { _id, web_url, headline, abstract, keywords } = props.article;
  const { addFavorite, removeFavorite } = useActions();
  const favoriteState = useTypedSelector((state) => state.favoriteSlice);
  const favoriteId = favoriteState.filter((el) => el._id === _id);
  console.log(favoriteState);

  const handleAddFavorite = () => {
    const filteredState = favoriteState.filter((el) => el._id === _id);
    if (filteredState[0]?._id !== _id) {
      addFavorite({ _id, web_url, headline, abstract, keywords });
    }
  };

  const handleRemoveFavorite = () => {
    if (favoriteState.length !== 0) {
      removeFavorite({ _id });
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
