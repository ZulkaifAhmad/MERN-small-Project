# 📸 Social Posts

A minimal full-stack social posting app built with the MERN stack. Users can create posts with a caption and image, and view all posts in a feed.

---

## 🔗 Repository

[github.com/ZulkaifAhmad/MERN-small-Project](https://github.com/ZulkaifAhmad/MERN-small-Project)

---

## ✨ Features

- 📝 Create a post with a caption and image
- 🖼️ View all posts in a feed
- 📦 Image upload via `multipart/form-data`
- ⚡ React 19 `useActionState` for form handling

---

## 🛠️ Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | React 19, React Router v6, Axios    |
| Backend  | Node.js, Express.js                 |
| Database | MongoDB, Mongoose                   |
| Upload   | Multer (image handling)             |

---

## 📁 Project Structure

```
MERN-small-Project/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Feed.jsx
│   │   │   └── CreatePosts.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/                  # Express backend
│   ├── models/
│   │   └── Post.js
│   ├── routes/
│   │   └── posts.js
│   ├── uploads/             # Stored images
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB running locally or a MongoDB Atlas URI

### 1. Clone the repository

```bash
git clone https://github.com/ZulkaifAhmad/MERN-small-Project.git
cd MERN-small-Project
```

### 2. Setup the Backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/social-posts
```

Start the server:

```bash
npm run dev
```

### 3. Setup the Frontend

```bash
cd client
npm install
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 📡 API Endpoints

| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| GET    | `/posts`       | Fetch all posts     |
| POST   | `/create-post` | Create a new post   |

---

## 📸 Usage

1. Open the app in your browser
2. Click **Create Post**
3. Enter a caption and select an image
4. Hit **Create Post** — you'll be redirected to the feed
5. Your post appears in the feed with its image and caption

---

## 📌 Notes

- Images are stored in the `server/uploads/` folder via Multer
- The frontend uses React 19's `useActionState` hook for clean form state and loading handling
- Make sure MongoDB is running before starting the server

---

## 👤 Author

**Zulkaif Ahmad**
[GitHub](https://github.com/ZulkaifAhmad)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).