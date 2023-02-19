import StarBorderIcon from '@mui/icons-material/StarBorder';
import Tooltip from '@mui/material/Tooltip';

function NoFavoriteStar() {
  return (
    <div>
      <Tooltip title="Add to favorites">
        <StarBorderIcon
          className="favorite__article__item"
          color="primary"
          fontSize="large"
        />
      </Tooltip>
    </div>
  );
}
export default NoFavoriteStar;
