import ArticleList from 'components/articleList/ArticleList';
import ArticleSearchBox from 'components/articleSearchBox/ArticleSearchBox';
import { useTypedSelector } from 'hooks/useTypedSelector';

function MainPage() {
  const { searchQuery } = useTypedSelector((state) => state.articleSearchQuery);
  return (
    <>
      <ArticleSearchBox />

      <ArticleList searchQuery={searchQuery} />
    </>
  );
}
export default MainPage;
