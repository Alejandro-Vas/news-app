import { useGetWeatherQuery } from "store/articleSearch/articleSearchApi";

const Header = () => {
  const { data: articles } = useGetWeatherQuery("Putin");

  console.log(articles);

  return (
    <>
      <div>
        <h1>Header</h1>
      </div>
      <div>
        <h2>Header</h2>
      </div>
      <div>Article text</div>
    </>
  );
};
export default Header;
