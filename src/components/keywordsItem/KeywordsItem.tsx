import { Button } from '@mui/material';
import useActions from '../../hooks/useActions';

interface IProps {
  keyword: string;
}

function KeywordsItem({ keyword }:IProps) {
  const { setArticleSearchQuery } = useActions();
  const handleClick = () => {
    setTimeout(() => setArticleSearchQuery(keyword), 500);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Button
        className="keywords-button"
        variant="contained"
        onClick={handleClick}
        sx={{ fontSize: 12 }}
      >
        {keyword.length < 30 ? keyword : `${keyword.slice(0, 30)}...`}
      </Button>
      {' '}
    </>
  );
}
export default KeywordsItem;
