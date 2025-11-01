import React, { useEffect, useState } from "react";
import "../PostList.css";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5100/api/posts")
      .then((r) => r.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <main className="blog-container">
      <h2 className="blog-title">Latest Posts</h2>
      <div className="blog-grid">
        {posts.length === 0 ? (
          <div className="no-posts">No posts yet — create one!</div>
        ) : (
          posts.map((p) => (
            <article key={p.id} className="blog-card">
              <div className="blog-meta">
                <time>{new Date(p.createdAt).toLocaleDateString()}</time>
                <span>• 1 min read</span>
              </div>
              <h3 className="blog-heading">{p.title}</h3>
              <p className="blog-content">{p.content.slice(0, 160)}{p.content.length>160?'...':''}</p>
              <div className="card-footer">
                <button className="read-more-btn">Read more →</button>
              </div>
            </article>
          ))
        )}
      </div>
    </main>
  );
}
