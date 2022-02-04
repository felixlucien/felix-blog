import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogPosts.css";

export const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    var posts = fetch("http://localhost:8080/listPosts")
      .then((x) => x.json())
      .then((x) => {
        setPosts(x);
      });
  }, []);

  return (
    <div className="blog-posts">
      <h1>Blog Posts</h1>
      {posts.map((x: any) => (
        <BlogTile
          key={x.title}
          title={x.title}
          description={x.description}
          date={x.date}
        />
      ))}
    </div>
  );
};

type BlogTileProps = {
  title: string;
  description: string;
  date: string;
};

const BlogTile = ({ title, description, date }: BlogTileProps) => {
  return (
    <Link to="blog/abcdefgh">
      <div className="blog-tile">
        <div className="blog-tile-header">
          <h2>{title}</h2>
          <h6
            style={{
              marginLeft: "auto",
            }}
          >
            11/12/2021
          </h6>
        </div>
        <p>{description}</p>
      </div>
    </Link>
  );
};
