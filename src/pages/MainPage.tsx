import ArticleList from 'components/articleList/ArticleList';
import Search from 'components/Search';
import { useTypedSelector } from 'hooks/useTypedSelector';

function MainPage() {
  const { searchQuery } = useTypedSelector((state) => state.articleSearchQuery);
  return (
    <>
      <Search />

      <ArticleList searchQuery={searchQuery} />
    </>
  );
}
export default MainPage;
