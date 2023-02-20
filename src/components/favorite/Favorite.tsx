import Bookmark from '@mui/icons-material/Bookmark';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import { Tooltip } from '@mui/material';

interface IFavoriteProps {
  isFavorite?: boolean;
}

function Favorite({ isFavorite = false } : IFavoriteProps) {
  const Icon = isFavorite ? Bookmark : BookmarkBorder
  return (
    <div>
      <Tooltip title="Remove from favorites">
        <Icon
          color="primary"
          fontSize="large"
        />
      </Tooltip>
    </div>
  );
}
export default Favorite;
