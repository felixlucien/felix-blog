import Link from "next/link";

export const ArticleMeta = ({ article }: any) => {
  return (
    <Link href={article.id} className="text-black">
      <div className="p-2 blog-meta">
        <p className="text-2xl font-bold m-0">{article.name}</p>
        <p className="ml-auto m-0">
          {article.date.toLocaleString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          - {article.read_time} read
        </p>
        <p className="mb-2 w-full text-left">{article.description}</p>
      </div>
    </Link>
  );
};
