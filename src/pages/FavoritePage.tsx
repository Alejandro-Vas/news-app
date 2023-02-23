import { Button, Typography } from '@mui/material';
import FavoriteList from 'components/favoriteList/FavoriteList';
import useActions from 'hooks/useActions';

function FavoritePage() {
  const { clearFavorite } = useActions();
  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
      >
        Favorite Articles
      </Typography>

      <Button onClick={() => clearFavorite()}>
        Clear
      </Button>

      <FavoriteList />
    </>
  );
}
export default FavoritePage;
