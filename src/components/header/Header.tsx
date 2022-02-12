import { useGetArticleSearchQuery } from "store/articleSearch/articleSearchApi";

const Header = () => {
  const { data } = useGetArticleSearchQuery("Putin");

  console.log(data);

  return (
    <>
      <div>
        <h1>Status {data?.status}</h1>
        <h2>Header</h2>
      </div>
      <div>Article text</div>
    </>
  );
};
export default Header;
