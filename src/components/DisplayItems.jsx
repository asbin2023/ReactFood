import { useFetch } from "../hooks/useFetch";
import Item from "./Item";

export default function DisplayItems() {
  const [data, isLoading, error] = useFetch("http://localhost:3000/meals");

  const renderedData = data.map((item) => {
    return <Item key={item.id} item={item} />;
  });

  let content;

  if (isLoading) {
    content = <div>Loading</div>;
  } else if (error) {
    content = <div>Error {error}</div>;
  } else {
    content = renderedData;
  }

  return (
    <main className="flex gap-6 p-2 flex-wrap w-full items-center border-red-500 justify-center">
      {content}
    </main>
  );
}
