import Favorite from './Favorite';

import { DocsEntity } from '../../interfaces/IArticleSearchInterface';

interface IProps {
  article?: DocsEntity;
}

function FavoriteWrapper({ article }:IProps) {
  console.log(article);

  const isFavorite = false
  return (
    <Favorite isFavorite={isFavorite} />
  );
}

export default FavoriteWrapper;
