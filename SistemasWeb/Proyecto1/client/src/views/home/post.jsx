import { useCallback, useEffect } from "react";
import PropTypes from 'prop-types'
import useApi from "../../hooks/useApi";
import Loading from "../../components/loading";

function Post({postId}) {
  let idElemento = postId ? postId : null;


    const { data, error, loading } = useApi(`http://localhost:3030/posts/${idElemento}`);

    const loadPost = useCallback(async() => {
      if (data) {
        let contenido = document.getElementById("postdata")
        console.log(data)
        let titulo = data.title;
        let content = data.content;
        let image = data.image_base64;
  
        if (!image) {
          contenido.innerHTML = `<h1 id="título" style="width: 100%; text-align: center; color: #704100; margin-bottom: 30px; font-size: 40px">${titulo}</h1><p id="contenido" style="text-align: justify; font-family: Montserrat; line-height: 1.6">${content}</p>`;
        } else {
          contenido.innerHTML = `<img src="${image}" style="float: left; width: 35%; border-radius: 50%; margin: 20px; background-color: #fff7c7"></img><h1 id="título" style="width: 100%; text-align: center; color: #704100; margin-bottom: 30px; font-size: 40px; background-color: #fff7c7">${titulo}</h1><p id="contenido" style="text-align: justify; font-family: Montserrat; line-height: 1.6; background-color: #fff7c7">${content}</p>`;
        }
      }
    }, [data])
  
    useEffect(() => {
      loadPost();
    }, [loadPost, data]);
  
    if (loading) {
      return (
        <div
        id="publicación"
        style={{
          width: "85%",
          height: "90vh",
          backgroundColor: "#fff7c7",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          alignText: "center",
          overflowY: "scroll",
        }}
      >
        <Loading></Loading>
      </div>
      )
    }
  
    if (error) {
      return (
        <div
        id="publicación"
        style={{
          width: "85%",
          height: "90vh",
          backgroundColor: "#fff7c7",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          alignText: "center",
          overflowY: "scroll",
        }}
      >
        <div>Error...</div>;
      </div>
      )
    }
  
    if (!data) {
      return (
        <div
        id="publicación"
        style={{
          width: "85%",
          height: "90vh",
          backgroundColor: "#fff7c7",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          alignText: "center",
          overflowY: "scroll",
        }}
      >
        <div>No hay datos</div>;
      </div>
      )
    } else {
  
      return (
        <div
          id="publicación"
          style={{
            width: "85%",
            height: "90vh",
            backgroundColor: "#fff7c7",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            alignText: "center",
            overflowY: "scroll",
            backgroundImage: "url('/src/assets/Post.webp')",
          }}
        >
          <div
            id="postdata"
            style={{
              display: "block",
              width: "80%",
              height: "80vh",
              padding: "20px",
              alignText: "center",
            }}
          >
  
          </div>
        </div>
        
      );
    }
  
}

Post.propTypes = {
  postId: PropTypes.oneOfType([
      PropTypes.number
  ])
};

export default Post;
