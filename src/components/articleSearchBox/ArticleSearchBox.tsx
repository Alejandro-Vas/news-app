import { useTypedSelector } from 'hooks/useTypedSelector';
import useActions from 'hooks/useActions';
import { useGetArticleSearchQuery } from 'store/articleSearch/articleSearchApi';

import {
  TextField, Button, Autocomplete, Box,
} from '@mui/material';
import searchTags from './searchTags'

function ArticleSearchBox() {
  const { searchQuery, searchInputText } = useTypedSelector((state) => state.articleSearchQuery);

  const { isLoading, isFetching } = useGetArticleSearchQuery(searchQuery);

  const { setSearchQuery, setSearchInputText } = useActions();

  const onSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (searchInputText !== '') {
      setSearchQuery(searchInputText);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <Autocomplete
        sx={{ width: 500, mr: 2 }}
        value={searchInputText}
        inputValue={searchInputText}
        onInputChange={(event, newInputValue) => {
          setSearchInputText(newInputValue);
        }}
        options={searchTags}
        isOptionEqualToValue={(option, value) => option === value}
        size="small"
        renderInput={(params) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TextField {...params} />
        )}
        autoSelect
      />

      <Button
        variant="contained"
        disabled={isLoading || isFetching}
        type="submit"
        onClick={(e) => onSearch(e)}
      >
        SEARCH
      </Button>
    </Box>
  );
}
export default ArticleSearchBox;
