import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FormControl } from "@mui/material";
import { useState } from "react";
import { useTypedSelector } from "hooks/useTypedSelector";
import useActions from "hooks/useActions";

const ArticleSearchBox = () => {
  const tags = ["Politics", "Science", "Medicine", "Covid-19"];

  const articleSearchQuery = useTypedSelector(
    (state) => state.articleSearchQuery.value
  );

  const [queryValue, setQueryValue] = useState(articleSearchQuery);
  console.log(queryValue);

  const { setArticleSearchQuery } = useActions();

  const onBlurSearch = () => {
    if (queryValue !== "") {
      setArticleSearchQuery(queryValue);
    }
  };

  return (
    <FormControl>
      <Autocomplete
        inputValue={queryValue}
        isOptionEqualToValue={(option, value) => true}
        onInputChange={(event, newInputValue) => {
          setQueryValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={tags}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="type article theme" />
        )}
        onBlur={onBlurSearch}
      />
    </FormControl>
  );
};
export default ArticleSearchBox;
