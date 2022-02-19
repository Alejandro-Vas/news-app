import { TextField, Button, FormControl } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { useTypedSelector } from "hooks/useTypedSelector";
import useActions from "hooks/useActions";
import { useGetArticleSearchQuery } from "store/articleSearch/articleSearchApi";

const ArticleSearchBox = () => {
  const tags = ["Politics", "Science", "Medicine", "Covid-19"];

  const articleSearchQuery = useTypedSelector(
    (state) => state.articleSearchQuery.value
  );

  const { isLoading, isFetching } =
    useGetArticleSearchQuery(articleSearchQuery);

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

  const onEnter = (e: any) => {
    if (e.which === 13) {
      setArticleSearchQuery(queryValue);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <form>
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
          autoHighlight
          autoSelect
          options={tags}
          renderInput={(params) => (
            <TextField {...params} label="type article theme" />
          )}
          onSubmit={onSearch}
        />
        <Button
          className="search-form__item"
          variant="contained"
          disabled={isLoading || isFetching}
          size="large"
          type="submit"
          onClick={(e) => onSearch(e)}
        >
          SEARCH ARTICLE
        </Button>
      </div>
    </form>
  );
};
export default ArticleSearchBox;
