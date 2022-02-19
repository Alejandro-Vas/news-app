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
    <div className="search-form">
      <Autocomplete
        sx={{ width: 500 }}
        className="search-form__item"
        freeSolo
        value={articleSearchQuery}
        inputValue={queryValue}
        onInputChange={(event, newInputValue) => {
          setQueryValue(newInputValue);
        }}
        isOptionEqualToValue={(option, value) => true}
        id="controllable-states-demo"
        options={tags}
        renderInput={(params) => (
          <TextField {...params} label="type article theme" />
        )}
        onSubmit={onSearch}
      />
      <Button
        className="search-form__item"
        variant="contained"
        size="large"
        type="submit"
        onClick={(e) => onSearch(e)}
      >
        SEARCH ARTICLE
      </Button>
    </div>
  );
};
export default ArticleSearchBox;
