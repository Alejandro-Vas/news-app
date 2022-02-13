interface IProps {
  keyword: string;
}

const KeywordsItem: React.FC<IProps> = (props) => {
  const { keyword } = props;
  return <span>| {keyword} | </span>;
};
export default KeywordsItem;
