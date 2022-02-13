import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const ArticleSearchBox = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={tags}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Article tag" />}
      autoComplete={false}
    />
  );
};

export default ArticleSearchBox;

const tags = ["Politics", "Science", "IT"];
