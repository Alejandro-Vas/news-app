import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Tooltip } from '@mui/material';

interface IFavoriteStarProps {
  isFavorite?: boolean;
}

function FavoriteStar({ isFavorite = false } : IFavoriteStarProps) {
  const Icon = isFavorite ? StarIcon : StarBorderIcon
  return (
    <div>
      <Tooltip title="Remove from favorites">
        <Icon
          className="favorite__article__item"
          color="primary"
          fontSize="large"
        />
      </Tooltip>
    </div>
  );
}
export default FavoriteStar;
