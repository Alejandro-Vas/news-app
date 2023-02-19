import StarIcon from '@mui/icons-material/Star';
import Tooltip from '@mui/material/Tooltip';

function FavoriteStar() {
  return (
    <div>
      <Tooltip title="Remove from favorites">
        <StarIcon
          className="favorite__article__item"
          color="primary"
          fontSize="large"
        />
      </Tooltip>
    </div>
  );
}
export default FavoriteStar;
