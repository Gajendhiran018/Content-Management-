import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ Add this
import "../CreatePost.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // ✅ useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, content };

    try {
      const response = await fetch("http://localhost:5100/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        alert("✅ Post Created Successfully!");
        setTitle("");
        setContent("");

        // ✅ Redirect to home page after success
        navigate("/");
      } else {
        alert("❌ Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server not responding");
    }
  };

  return (
    <div className="create-post-container">
      <div className="post-card">
        <h2 className="post-title">Create New Post</h2>
        <form onSubmit={handleSubmit} className="post-form">
          <label className="form-label">Title</label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label className="form-label">Content</label>
          <textarea
            className="form-textarea"
            placeholder="Write your post content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <button type="submit" className="submit-btn">
            <span className="send-icon"><i class="fa-solid fa-paper-plane"></i></span> Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
