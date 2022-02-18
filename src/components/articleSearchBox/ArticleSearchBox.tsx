import { TextField, Button } from "@mui/material";
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

  const [queryValue, setQueryValue] = useState("");
  console.log(queryValue);

  const { setArticleSearchQuery } = useActions();

  //TODO - type event
  const onSearch = (e: any) => {
    e.preventDefault();
    if (queryValue !== "") {
      setArticleSearchQuery(queryValue);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <FormControl>
      <Autocomplete
        inputValue={queryValue}
        value={""}
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
        onClick={onSearch}
      />
      <Button
        variant="contained"
        size="large"
        type="submit"
        onClick={(e) => onSearch(e)}
      >
        Поиск
      </Button>
    </FormControl>
  );
};
export default ArticleSearchBox;
