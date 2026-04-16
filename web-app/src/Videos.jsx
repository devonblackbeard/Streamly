import React from "react";
import { useState, useEffect } from "react";

const Videos = () => {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5210/api/videos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setVideos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {videos?.map((video) => (
            <div
              key={video.id}
              style={{                
                minWidth: "300px",
                maxWidth: "300px",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Videos;
