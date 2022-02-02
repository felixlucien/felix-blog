import { Link } from "react-router-dom";
import "./BlogPosts.css";

export const BlogPosts = () => {
  return (
    <div className="blog-posts">
      <h1>Blog Posts</h1>
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
    </div>
  );
};

const BlogTile = () => {
  return (
    <Link to="blog/abcdefgh">
      <div className="blog-tile">
        <div className="blog-tile-header">
          <h2>Monorepo like a boss with cloud run</h2>
          <h6
            style={{
              marginLeft: "auto",
            }}
          >
            11/12/2021
          </h6>
        </div>
        <p>Description</p>
      </div>
    </Link>
  );
};
