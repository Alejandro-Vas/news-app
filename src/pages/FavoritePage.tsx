import { Typography } from "@mui/material";
import FavoriteList from "components/favoriteList/FavoriteList";

const MainPage = () => {
  return (
    <div className="fade-in">
      <Typography variant="h3" component="div">
        Favorite Articles
      </Typography>
      <FavoriteList />
    </div>
  );
};
export default MainPage;
