import ArticleItem from "components/articleItem/ArticleItem";
import { useGetArticleSearchQuery } from "store/articleSearch/articleSearchApi";

const Header = () => {
  const { data, isSuccess, isLoading, isUninitialized } =
    useGetArticleSearchQuery("Putin");

  console.log(data);

  return (
    <div>
      {!isUninitialized && isSuccess && !isLoading && (
        <div>
          {data?.response?.docs?.map((article) => {
            return (
              article &&
              typeof article?.multimedia![0] !== "undefined" && (
                <ArticleItem key={article.abstract} article={article} />
              )
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Header;
