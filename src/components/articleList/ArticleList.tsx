import ArticleItem from "components/articleItem/ArticleItem";
import Spinner from "components/spinner/Spinner";
import SkeletonItem from "components/skeletonItem/SkeletonItem";
import { useGetArticleSearchQuery } from "store/articleSearch/articleSearchApi";
import { useTypedSelector } from "hooks/useTypedSelector";
import { v4 as uuidv4 } from "uuid";

const ArticleList = () => {
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
                <div className="grid-item" key={uuidv4()}>
                  {!isLoading && !isFetching ? (
                    <ArticleItem key={article._id} article={article} />
                  ) : (
                    <SkeletonItem key={uuidv4()} />
                  )}
                </div>
              )
            );
          })}
        </div>
      )}
    </div>
  );
};
export default ArticleList;
