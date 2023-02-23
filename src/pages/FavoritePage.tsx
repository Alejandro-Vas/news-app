import { Typography } from '@mui/material';
import FavoriteList from 'components/favoriteList/FavoriteList';

function FavoritePage() {
  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
      >
        Favorite Articles
      </Typography>

      <FavoriteList />
    </>
  );
}
export default FavoritePage;
