import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const FavoriteStar = () => {
  return (
    <>
      <StarBorderIcon
        className="favorite__article__item"
        color="primary"
        fontSize="large"
      />
      <StarIcon
        className="favorite__article__item"
        color="primary"
        fontSize="large"
      />
    </>
  );
};
export default FavoriteStar;
