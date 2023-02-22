import { Typography, Box } from '@mui/material';
import FavoriteList from 'components/favoriteList/FavoriteList';

function FavoritePage() {
  return (
    <Box sx={{ height: '95vh' }}>
      <Typography variant="subtitle1" component="div">
        Favorite Articles
      </Typography>

      <FavoriteList />
    </Box>
  );
}
export default FavoritePage;
