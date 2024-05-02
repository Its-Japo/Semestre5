import { useState, useEffect } from "react";

import Selector from "./selector";
import Post from "./post";

function Content() {
  // Fetch posts from API
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(1);

  async function fetchPosts() {
    let posts = await fetch("http://localhost:3030/posts").then((res) =>
      res.json()
    );
    setPosts(posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);


  if (!("error" in posts)) {
    if (posts.length === 0) {
      return (
        <div style={{
          display: "flex"
        }}>
          <div
            style={{
              width: "15%",
              height: "90vh",
              backgroundColor: "#333",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Selector
              title={"No hay datos"}
            />
          </div>
          <Post></Post>
        </div>
      );
  } else {
    setTimeout(() => {
      
    }, 3000)
    return (
      <div style={{
        display: "flex"
      }}>
        <div
          style={{
            width: "15%",
            height: "90vh",
            backgroundColor: "#333",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {posts.map((elemento) => {
            return (
                <div
                key={elemento.id}
                onClick={() => {setPost(elemento.id)}}
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  margin: "10px",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  height: "5vh",
                  color: "white",
                  border: "1px black solid",
                  borderRadius: "5px",
                  backgroundColor: "rgba(0,0,0,0.3)",
                }}
              > 
                {elemento.title}
              </div>
            );
          })}
        </div>
        <Post postId={post}></Post>
      </div>
    );
  }
  } else {
    return (
      <div style={{
        display: "flex"
      }}>
        <div
          style={{
            width: "15%",
            height: "90vh",
            backgroundColor: "#333",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Selector
            title="No hay datos"
            content="Ha ocurrido un error"
          />
        </div>
        <Post></Post>
      </div>
    );
  }
}

export default Content;
