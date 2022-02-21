import { Typography } from "@mui/material";
import FavoriteList from "components/favoriteList/FavoriteList";

const MainPage = () => {
  return (
    <>
      <Typography variant="h3" component="div">
        Favorite Articles
      </Typography>
      <FavoriteList />
    </>
  );
};
export default MainPage;
