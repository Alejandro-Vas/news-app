import ArticleItem from "components/articleItem/ArticleItem";
import Spinner from "components/spinner/Spinner";
import { useGetArticleSearchQuery } from "store/articleSearch/articleSearchApi";

const Header = () => {
  const { data, isSuccess, isLoading, isUninitialized } =
    useGetArticleSearchQuery("Putin");

  console.log(data);

  return (
    <div>
      {isLoading && <Spinner />}
      {!isUninitialized && isSuccess && !isLoading && (
        <div>
          {data?.response?.docs?.map((article) => {
            return (
              article &&
              typeof article?.multimedia![5] !== "undefined" && (
                <ArticleItem key={article._id} article={article} />
              )
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Header;
