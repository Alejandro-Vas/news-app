import { Typography } from '@mui/material';
import FavoriteList from 'components/favoriteList/FavoriteList';

function FavoritePage() {
  return (
    <>
      <Typography variant="subtitle1" component="div">
        Favorite Articles
      </Typography>

      <FavoriteList />
    </>
  );
}
export default FavoritePage;
