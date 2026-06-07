import React, { useActionState, useTransition , useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


async function createPostAction(prevState, formData) {
  console.log("Form data received in action:", formData);
  const caption = formData.get("caption");
  const image = formData.get("image");

  // Basic validation
  if (!caption.trim()) {
    return { error: "Caption is required." };
  }
  if (!image || image.size === 0) {
    return { error: "Please select an image." };
  }

  try {
    await axios.post("http://localhost:3000/create-post", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return { success: true };
  } catch (err) {
    return { error: "Failed to create post. Please try again." };
  }
}

function CreatePosts() {
  const navigate = useNavigate();
  const [state, action, isPending] = useActionState(createPostAction, {
    error: null,
    success: false,
  });

  
  useEffect(()=>{
    // Navigate after success
    if (state.success) {
      navigate("/");
    }
    
  } , [state.success , navigate])

  return (
    <div className="create-post-container">
      <h1>Create a New Post</h1>

      {/* No onSubmit, no e.preventDefault() — React handles it */}
      <form action={action}>
        <div>
          <label htmlFor="caption">Caption</label>
          <input
            id="caption"
            name="caption"
            type="text"
            placeholder="Caption"
            required
          />
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            required
          />
        </div>

        {/* Error message from action */}
        {state.error && (
          <p style={{ color: "red" }}>{state.error}</p>
        )}

        {/* isPending gives you loading state for free */}
        <button type="submit" disabled={isPending}>
          {isPending ? "Posting..." : "Create Post"}
        </button>
      </form>

      <button onClick={() => navigate("/")} disabled={isPending}>
        Back to Feed
      </button>
    </div>
  );
}

export default CreatePosts;