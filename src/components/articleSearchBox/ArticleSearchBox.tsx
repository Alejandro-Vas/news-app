import { useState } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelector';
import useActions from 'hooks/useActions';
import { useGetArticleSearchQuery } from 'store/articleSearch/articleSearchApi';

import {
  TextField, Button, Autocomplete, Box,
} from '@mui/material';
import searchTags from './searchTags'

function ArticleSearchBox() {
  const articleSearchQuery = useTypedSelector((state) => state.articleSearchQuery.value);

  const { isLoading, isFetching } = useGetArticleSearchQuery(articleSearchQuery);

  const [queryValue, setQueryValue] = useState('');
  console.log(queryValue)

  const { setArticleSearchQuery } = useActions();

  const onSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (queryValue !== '') {
      setArticleSearchQuery(queryValue);
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
        value={articleSearchQuery}
        inputValue={queryValue}
        onInputChange={(event, newInputValue) => {
          setQueryValue(newInputValue);
        }}
        options={searchTags}
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
