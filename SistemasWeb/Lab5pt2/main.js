colorPrimario = "#242424"
colorSecundario = "#575757"
colorTerciario = "#141414"
colorCuaternario = "#383838"
colorChat = "lightblue"



modoOscuro = localStorage.getItem("modoOscuro");
if (modoOscuro == null) {
  console.log("No existe modoOscuro en localStorage")
  modoOscuro = true;
}



if (modoOscuro == "true") {
  colorPrimario = "#242424"
  colorSecundario = "#575757"
  colorTerciario = "#141414"
  colorCuaternario = "#383838"
  colorTexto = 'white'
  colorCaja = 'black'
} else {
  colorPrimario = "white"
  colorSecundario = "#f2f2f2"
  colorTerciario = "#e6e6e6"
  colorCuaternario = "#dadada"
  colorTexto = 'black'
  colorCaja = 'white'
}

colorAcento = "#00aeff"
fuenteX = "'Times New Roman', Times, serif"

doc = document;

body = doc.getElementsByTagName("body")[0];
body.style = "margin: 0px"

contenedor = doc.createElement("div");
contenedor.id = "contenedor";

contenedor.style.backgroundColor = 'white'
contenedor.style.height = "99.8vh";
contenedor.style.display = "grid";
contenedor.style.fontFamily = fuenteX;
contenedor.style.border = "1px solid black";
contenedor.style.gridTemplateColumns = "20% 80%";
contenedor.style.gridTemplateRows = "90% 10%";
body.appendChild(contenedor);

listadoChats = doc.createElement("div");
listadoChats.id = "listado-chats";
listadoChats.style.backgroundColor = colorSecundario;
listadoChats.style.border = "1px solid black";
listadoChats.style.padding = "8px";
listadoChats.style.display = "flex";
listadoChats.style.flexDirection = "column";
listadoChats.style.overflowY = "scroll";
contenedor.appendChild(listadoChats);

mensajesArea = doc.createElement("div");
mensajesArea.id = "area"
mensajesArea.style.backgroundColor = colorTerciario;
mensajesArea.style.border = "1px solid black";
mensajesArea.style.overflowY = "scroll";
mensajesArea.style.display = "flex";
mensajesArea.style.flexDirection = "column";

contenedor.appendChild(mensajesArea);

searchBar = doc.createElement("div");
searchBar.id = "search-bar";
searchBar.style.width = "80%";
searchBar.style.backgroundColor = colorPrimario;
searchBar.style.display = "flex";
searchBar.style.justifyContent = "space-around";
searchBar.style.alignItems = "center";
searchBar.style.position = "fixed";

inputSearch = doc.createElement("input");
inputSearch.id = "input-search";
inputSearch.style.width = "70%";
inputSearch.style.height = "30px";
inputSearch.style.border = "1px solid black";
inputSearch.style.borderRadius = "5px";
inputSearch.style.padding = "5px";
inputSearch.style.color = colorTexto;
inputSearch.style.fontFamily = fuenteX;
inputSearch.style.fontSize = "15px";
inputSearch.style.fontWeight = "bold";
inputSearch.placeholder = "Buscar...";
inputSearch.style.backgroundColor = colorCuaternario;
inputSearch.style.margin = "10px"
searchBar.appendChild(inputSearch);

mensajesArea.appendChild(searchBar);

mensaje = doc.createElement("div");
mensaje.style.backgroundColor = colorTerciario
mensaje.style.border = "1px solid black";
mensaje.style.marginTop = "65px"
mensaje.id = "mensaje";

mensajesArea.appendChild(mensaje);


contenidoPerfil = doc.createElement("div");
contenidoPerfil.id = "contenido-perfil";
contenidoPerfil.style.backgroundColor = colorPrimario;
contenidoPerfil.style.display = "flex";
contenidoPerfil.style.justifyContent = "space-around";
contenidoPerfil.style.alignItems = "center";
contenidoPerfil.innerHTML =
  '<img width="65px" height="65px" class="imagen-perfil" src="data:image/jpeg;base64,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"/>';
contenedor.appendChild(contenidoPerfil);

toggleMode = doc.createElement("button");
toggleMode.id = "toggle-mode";
toggleMode.innerHTML = "Toggle Mode";
toggleMode.style.backgroundColor = colorCuaternario;
toggleMode.style.color = colorTexto;
toggleMode.onclick = function(){
  if (modoOscuro == "true") {
    modoOscuro = false;
  } else {
    modoOscuro = true;
  }
  localStorage.setItem("modoOscuro", modoOscuro);
  location.reload();
}
contenidoPerfil.appendChild(toggleMode);

imagen = doc.getElementsByClassName("imagen-perfil")[0];
imagen.style.border = "1px solid black";
imagen.style.borderRadius = "50%";

paddingtonName = doc.createElement("h3");
paddingtonName.style.color = colorTexto;
paddingtonName.innerHTML = "Joaquín Puente";
contenidoPerfil.appendChild(paddingtonName);

contenidoChat = doc.createElement("div");
contenidoChat.style.backgroundColor = colorCuaternario;
contenidoChat.style.border = "1px solid black";
contenidoChat.style.display = "flex";
contenidoChat.style.justifyContent = "space-evenly";
contenidoChat.style.alignItems = "center";
contenidoChat.id = "contenido-chat";
contenedor.appendChild(contenidoChat);


mensajeChat = doc.createElement("textarea");
mensajeChat.id = "mensaje-chat";
mensajeChat.style.width = "90%";
mensajeChat.style.height = "40%";
mensajeChat.placeholder = "Escribe un mensaje...";
mensajeChat.placeholder.color = colorTexto;
mensajeChat.style.backgroundColor = colorCuaternario;
mensajeChat.style.color = colorTexto;
mensajeChat.maxLength = "140"
contenidoChat.appendChild(mensajeChat);

enviar = doc.createElement("button");
enviar.style.height = "40%";
enviar.style.width = "7%";
enviar.style.backgroundColor = colorAcento;
enviar.style.color = "white";
enviar.class = "enviar";
enviar.id = "enviar";
enviar.innerHTML = "Enviar";
contenidoChat.appendChild(enviar);


boton = doc.getElementById("enviar")
input = doc.getElementById("mensaje-chat")
mensajes = []

mensajesBox = doc.getElementById("mensaje")




document.addEventListener('keydown', (event)=> {    
    if (event.key === "Enter") {
        event.preventDefault();
        boton.click();
    }
});


  
