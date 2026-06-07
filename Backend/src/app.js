const express = require("express");
const multer = require("multer");
const env = require("dotenv");
const dbConnect = require("./db/db");
const uploadfile = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");
const app = express();

app.use(cors());

env.config();
dbConnect(process.env.MONGODB_URL);

app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
});

app.post("/create-post", upload.single("image"), async (req, res) => {
  const upload = await uploadfile(req.file.buffer, req.file.originalname);
  const post = await postModel.create({
    image: upload.url,
    caption: req.body.caption,
  });
  return res.status(201).json({
    message: "Post created successfully",
    post,
  });
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await postModel.find();
    if (posts.length === 0) {
      return res.status(404).json({
        message: "No posts found",
      });
    }
    return res.status(200).json({
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

module.exports = app;
