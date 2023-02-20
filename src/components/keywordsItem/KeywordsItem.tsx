import { Chip } from '@mui/material';
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

  const text = keyword.length < 36 ? keyword : `${keyword.slice(0, 36)}...`

  return (
    <Chip
      onClick={handleClick}
      color="primary"
      label={text}
      size="small"
    />
  );
}
export default KeywordsItem;
