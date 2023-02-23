import ArticlesList from 'components/ArticlesList';
import Search from 'components/Search';
import { useTypedSelector } from 'hooks/useTypedSelector';

function MainPage() {
  const { searchQuery } = useTypedSelector((state) => state.articleSearchQuery);
  return (
    <>
      <Search />

      <ArticlesList searchQuery={searchQuery} />
    </>
  );
}
export default MainPage;
