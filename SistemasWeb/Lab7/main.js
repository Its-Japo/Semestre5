function changePost(titulo, content, imagen) {
  loader = document.getElementById("loader");
  contenido = document.getElementById("postdata");

  loader.style.display = "block";
  if (imagen != null) {
    contenido.innerHTML = `<img src="./images/Evariste_Galois.jpg" style="float: left; max-width: 35%; border-radius: 50%; margin: 20px"></img><h1 id="título" style="width: 100%; text-align: center; color: #704100; margin-bottom: 30px; font-size: 40px">${titulo}</h1><p id="contenido" style="text-align: justify; font-family: Montserrat; line-height: 1.6">${content}</p>`;
  } else {
    contenido.innerHTML = `<h1 id="título" style="width: 100%; text-align: center; color: #704100; margin-bottom: 30px; font-size: 40px">${titulo}</h1><p id="contenido" style="text-align: justify; font-family: Montserrat; line-height: 1.6">${content}</p>`;
  }
  contenido.style.display = "block";
  loader.style.display = "none";
}

async function fetchPosts() {
  let posts = await fetch("http://127.0.0.1:3000/posts");
  if (!posts.ok) {
    changePost("Error", "Ha ocurrido un error", null);
  }
  let data = await posts.json();
  return data;
}

