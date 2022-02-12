import { useGetArticleSearchQuery } from "store/articleSearch/articleSearchApi";

const Header = () => {
  const { data, isSuccess, isLoading } = useGetArticleSearchQuery("Putin");

  console.log(data);

  return (
    <>
      <div>
        {isSuccess && !isLoading && (
          <div>
            {data?.response?.docs?.map((article) => {
              return (
                typeof article?.multimedia![0] !== "undefined" && (
                  <div key={article.abstract}>
                    <div>{article._id}</div>
                    <div>{article.headline.main}</div>
                    <div>{article.abstract}</div>
                    <div>{article.pub_date}</div>
                    <div>
                      <img
                        alt="article img"
                        src={
                          "https://www.nytimes.com/" +
                          article?.multimedia[0].url
                        }
                      />
                    </div>
                    <hr />
                  </div>
                )
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
