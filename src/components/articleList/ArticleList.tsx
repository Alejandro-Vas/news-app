import ArticleItem from "components/articleItem/ArticleItem";
import Spinner from "components/spinner/Spinner";
import { useGetArticleSearchQuery } from "store/articleSearch/articleSearchApi";
import { useTypedSelector } from "hooks/useTypedSelector";

const Header = () => {
  const articleSearchQuery = useTypedSelector(
    (state) => state.articleSearchQuery.value
  );
  const { data, isSuccess, isLoading, isFetching } =
    useGetArticleSearchQuery(articleSearchQuery);

  console.log(data);

  return (
    <div>
      {isLoading && isFetching && <Spinner />}
      {isSuccess && !isLoading && (
        <div className="grid-container">
          {data?.response?.docs?.map((article) => {
            return (
              article &&
              typeof article?.multimedia![5] !== "undefined" && (
                <div className="grid-item">
                  <ArticleItem key={article._id} article={article} />
                </div>
              )
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Header;
