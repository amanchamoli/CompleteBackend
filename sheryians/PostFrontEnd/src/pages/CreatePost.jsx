import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await axios.post(
        "http://localhost:3000/create-post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);

      alert("Post uploaded successfully!");

    } catch (error) {
      console.log(error);
      alert("Upload failed!");
    }
  };

  return (
    <section className="glass-card">
      <h1 className="page-title">Create New Post</h1>

      <form className="post-form" onSubmit={handleSubmit}>

        {/* Image Upload */}
        <div className="file-upload-wrapper">

          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="file-upload-preview"
            />
          ) : (
            <>
              <div className="upload-icon">📸</div>
              <span className="upload-text">
                Click to upload or drag image
              </span>
            </>
          )}

          <input
            type="file"
            name="image"
            accept="image/*"
            className="file-upload-input"
            onChange={handleImageChange}
            required
          />
        </div>

        {/* Caption */}
        <div className="input-group">
          <textarea
            name="caption"
            className="custom-input"
            placeholder="Write a captivating caption..."
            rows="3"
            required
          />
        </div>

        {/* Submit */}
        <button type="submit" className="gradient-btn">
          Upload Post
        </button>

      </form>
    </section>
  );
};

export default CreatePost;