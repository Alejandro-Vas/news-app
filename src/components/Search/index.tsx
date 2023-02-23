import { useTypedSelector } from 'hooks/useTypedSelector';
import useActions from 'hooks/useActions';
import { useGetArticleSearchQuery } from 'store/articleSearch/articleSearchApi';
import { TextField, Autocomplete, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SearchIcon from '@mui/icons-material/Search';
import { memo } from 'react';
import { shallowEqual } from 'react-redux';
import searchTags from 'constants/searchTags';

function Search() {
  const { searchQuery } = useTypedSelector((state) => state.articleSearchQuery, shallowEqual);
  const { searchInputText } = useTypedSelector((state) => state.articleSearchQuery, shallowEqual);

  const { isLoading, isFetching } = useGetArticleSearchQuery(searchQuery);

  const { setSearchQuery, setSearchInputText } = useActions();

  const onSearch = (e: React.FormEvent<HTMLButtonElement>) => {
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
        noOptionsText="No options found, press Search"
        value={searchInputText}
        inputValue={searchInputText}
        onInputChange={(event, newInputValue) => {
          setSearchInputText(newInputValue);
        }}
        options={searchTags}
        isOptionEqualToValue={(_option, value) => value === searchInputText}
        size="small"
        renderInput={(params) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TextField {...params} />
        )}
        autoSelect
      />

      <LoadingButton
        sx={{ flexShrink: 0 }}
        disabled={isLoading || isFetching}
        type="submit"
        variant="contained"
        color="primary"
        onClick={(e) => onSearch(e)}
        loading={isLoading || isFetching}
        loadingPosition="start"
        startIcon={<SearchIcon />}
      >
        SEARCH
      </LoadingButton>
    </Box>
  );
}
export default memo(Search);
