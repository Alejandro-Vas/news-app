import { Typography } from '@mui/material';
import FavoriteList from 'components/FavoriteList';

import ClearDialog from './ClearDialog';

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

      <ClearDialog />

      <FavoriteList />
    </>
  );
}
export default FavoritePage;
