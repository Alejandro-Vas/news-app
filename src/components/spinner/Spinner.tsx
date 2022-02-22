import { Typography } from "@mui/material";

const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner" />
      <Typography variant="subtitle1" gutterBottom component="div">
        Loading...
      </Typography>
    </div>
  );
};
export default Spinner;
