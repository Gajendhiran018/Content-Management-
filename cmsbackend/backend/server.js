const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
let posts = [];

app.get("/api/posts", (req, res) => {
  res.json(posts);
});
app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }
  const newPost = {
    id: Date.now(),
    title,
    content,
    createdAt: new Date(),
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
