import ReactMarkdown from "react-markdown";
import { ArticleMeta } from "./ArticleMeta";

import AutoDeploy from "./cloudbuild-hosting/auto-deploy-cloud-build.md";

export const articles = [
  {
    name: "Deploy easy with cloud build + firebase hosting.",
    date: new Date("26/06/2022"),
    description:
      "Setup cloud build triggers to deploy your firebase hosting web apps automatically!",
    content: AutoDeploy,
  },
];

export const ArticleDetail = () => {};

export const ArticlesList = () => {
  return (
    <div>
      {articles.map((x, i) => (
        <ArticleMeta article={x} />
      ))}
    </div>
  );
};
