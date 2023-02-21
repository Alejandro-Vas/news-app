import { Chip } from '@mui/material';
import useActions from '../../hooks/useActions';

interface IProps {
  keyword: string;
}

function KeywordsItem({ keyword }:IProps) {
  const { setSearchQuery, setSearchInputText } = useActions();

  const handleClick = () => {
    setSearchInputText(keyword)
    setSearchQuery(keyword);
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
