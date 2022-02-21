import StarIcon from "@mui/icons-material/Star";

const FavoriteStar: React.FC = () => {
  return (
    <div>
      <StarIcon
        className="favorite__article__item"
        color="primary"
        fontSize="large"
      />
    </div>
  );
};
export default FavoriteStar;
