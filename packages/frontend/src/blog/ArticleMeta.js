import { Link } from "react-router-dom";

export const ArticleMeta = ({ article }) => {
  return (
    <Link to={article.id} className="text-black">
      <div className="border-2 rounded shadow-lg hover:bg-gray-100 bg-white">
        <div className="p-2 flex flex-row items-center">
          <h1 className="text-xl font-bold m-0">{article.name}</h1>
          <p className="ml-auto m-0">{article.date.toLocaleString("en-us")}</p>
        </div>
        <p className="mb-2 ml-2 mt-2 w-full text-left">{article.description}</p>
      </div>
    </Link>
  );
};
