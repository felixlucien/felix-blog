import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { ArticleMeta } from "./ArticleMeta";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import * as styles from "./articlestyles.css";

export const articles = [
  {
    id: "react-cloudbuild",
    name: "Deploy easy with cloud build + firebase hosting.",
    date: new Date("2022-06-26"),
    description:
      "Setup cloud build triggers to deploy your firebase hosting web apps automatically!",
    link: "/cloudbuild-hosting/auto-deploy-cloud-build.md",
    read_time: "7 min",
  },
];

const renderers = {
  //This custom renderer changes how images are rendered
  //we use it to constrain the max width of an image to its container
  image: ({ alt, src, title }) => (
    <img alt={alt} src={src} title={title} style={{ maxWidth: 475 }} />
  ),
};

export const ArticleDetail = ({}) => {
  const params = useParams();

  const [content, setContent] = useState("");

  useEffect(() => {
    const article = articles.find((x) => x.id === params.id);

    if (!article) {
      return;
    }

    fetch(article.link)
      .then((r) => r.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="p-4 bg-gray-300 flex flex-col items-center">
      <div className="w-4/5">
        <ReactMarkdown
          escapeHtml={false}
          renderers={renderers}
          styles={styles}
          remarkPlugins={[remarkGfm]}
          transformImageUri={(uri) =>
            `https://${window.location.host}/cloudbuild-hosting/${uri}`
          }
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export const ArticlesList = () => {
  return (
    <div className="bg-slate-400 w-full h-screen p-3 flex flex-col items-center">
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="title-text text-4xl text-white font-bold mb-2">
          Blog posts
        </h1>
        {articles.map((x, i) => (
          <ArticleMeta key={i} article={x} />
        ))}
      </div>
    </div>
  );
};
