import { Button } from "@mui/material";
import useActions from "hooks/useActions";

interface IProps {
  keyword: string;
}

const KeywordsItem: React.FC<IProps> = (props) => {
  const { keyword } = props;
  const { setArticleSearchQuery } = useActions();
  const handleClick = () => {
    setTimeout(() => setArticleSearchQuery(keyword), 500);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button variant="outlined" onClick={handleClick}>
      {keyword.length < 30 ? keyword : `${keyword.slice(0, 30)}...`}
    </Button>
  );
};
export default KeywordsItem;
