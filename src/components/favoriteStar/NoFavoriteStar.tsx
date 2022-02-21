import StarBorderIcon from "@mui/icons-material/StarBorder";

const NoFavoriteStar: React.FC = () => {
  return (
    <div>
      <StarBorderIcon
        className="favorite__article__item"
        color="primary"
        fontSize="large"
      />
    </div>
  );
};
export default NoFavoriteStar;
