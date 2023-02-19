import FavoriteStar from './FavoriteStar';

import { DocsEntity } from '../../interfaces/IArticleSearchInterface';

interface IProps {
  article?: DocsEntity;
}

function FavoriteStarWrapper({ article }:IProps) {
  console.log(article);
  const isFavorite = false
  return (
    <FavoriteStar isFavorite={isFavorite} />
  );
}

export default FavoriteStarWrapper;
