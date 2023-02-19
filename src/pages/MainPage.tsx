import ArticleList from 'components/articleList/ArticleList';
import ArticleSearchBox from 'components/articleSearchBox/ArticleSearchBox';

function MainPage() {
  return (
    <>
      <ArticleSearchBox />
      <ArticleList />
    </>
  );
}
export default MainPage;
