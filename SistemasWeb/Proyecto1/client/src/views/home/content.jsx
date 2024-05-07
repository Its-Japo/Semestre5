import { useState, useEffect } from "react";
import useApi from '../../hooks/useApi'
import Selector from "./selector";
import Post from "./post";

function Content() {

  
  const { data, error, loading } = useApi('http://localhost:3030/posts');
  
  const [postIndex, setPostIndex] = useState(1);

    if (loading) {
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
              title="Cargando..."
              content="Cargando..."
            />
          </div>
          <Post></Post>
        </div>
      )
    } else if (error) {
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
      )
    } else if (data) {


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
            {data.map((elemento) => {
              return (
                  <div
                  key={elemento.id}
                  onClick={() => {setPostIndex(elemento.id)}}
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
          <Post postId={postIndex}></Post>
        </div>
      );
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
              content="No hay datos"
            />
          </div>
          <Post></Post>
        </div>
      )
    }
  
}

export default Content;
