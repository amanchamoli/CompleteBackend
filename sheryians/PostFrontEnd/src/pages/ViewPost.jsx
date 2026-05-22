import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewPost = () => {

  // State
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Posts
  useEffect(() => {

    axios
      .get("http://localhost:3000/posts")

      .then((res) => {

        console.log("API Response:", res.data);

        // If backend returns:
        // { data: [...] }

        if (Array.isArray(res.data.posts)) {
          setPosts(res.data.posts);
        }

        // If backend returns array directly:
        else if (Array.isArray(res.data)) {
          setPosts(res.data);
        }

        // Fallback
        else {
          setPosts([]);
        }

      })

      .catch((err) => {
        console.log("Error fetching posts:", err);
        setPosts([]);
      })

      .finally(() => {
        setLoading(false);
      });

  }, []);

  // Loading State
  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Loading...
      </h2>
    );
  }

  return (

    <section className="feed-container">

      <h1 className="page-title">Feed</h1>

      {/* No Posts */}
      {posts.length === 0 && (
        <p>No posts found</p>
      )}

      {/* Posts */}
      {posts?.map((post) => (

        <article
          key={post._id}
          className="post-card"
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "20px",
            maxWidth: "500px",
            marginInline: "auto"
          }}
        >

          {/* Image */}
          <img
            src={post.image}
            alt="Post"
            className="post-image"
            style={{
              width: "100%",
              borderRadius: "10px"
            }}
          />

          {/* Action Buttons */}
          <div
            className="post-actions"
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px"
            }}
          >

            <button className="action-btn">
              ❤️
            </button>

            <button className="action-btn">
              💬
            </button>

            <button className="action-btn">
              📤
            </button>

          </div>

          {/* Caption */}
          <div
            className="post-caption"
            style={{
              marginTop: "10px"
            }}
          >

            <strong>
              {post.username || "User"}
            </strong>

            {" "}
            {post.caption}

          </div>

        </article>

      ))}

    </section>
  );
};

export default ViewPost;