doc = document;

//url = 'http://127.0.0.1:3600/messages'
url = 'http://uwu-guate.site:3000/messages'

modoOscuro = localStorage.getItem("modoOscuro");

input = doc.getElementById("mensaje-chat")
boton = doc.getElementById("enviar")
searchInputElement = document.getElementById("input-search");
mensajesBox = doc.getElementById("mensaje")
mensajesArea = document.getElementById("area");
listadoChats = document.getElementById("listado-chats");

if (modoOscuro == null) {
  modoOscuro = true;
}

function validarURL(str) {
    const patron = new RegExp("^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$");
    return patron.test(str);
}

function urlImagen(mystr) {
    const isImage = (st) => /\.(jpg|jpeg|png|webp|avif|gif|svg)[\?\w=\w\.]*$/.test(st)

    return isImage(mystr);
}
    
async function getData(){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getAllUsers(data){
    data = await getData()
    data = data.reverse()

    listadoChats.innerHTML = ""

    users = []
    data.map(function (element) {
        if (!users.includes(element.username)) {
            users.push(element.username)
        }
    })

    for (let i = 0; i < users.length; i++) {
        div = document.createElement("div");
        div.class = "chat-user"
        div.style.padding = "10px"
        div.style.border = "1px solid black"
        div.style.borderRadius = "10px"
        if (modoOscuro == 'true') {
            div.style.backgroundColor = "black"
            div.style.color = "white"
        } else {
            div.style.backgroundColor = "white"
            div.style.color = "black"
        }
        div.style.margin = "10px"
        div.style.cursor = "pointer"
        div.innerHTML = users[i]
        listadoChats.appendChild(div);
    }

    return users;
}

async function fetchAndEmbed(url, elementId) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.text();
    const element = document.getElementById(elementId);
    embeded = document.createElement("div");
    embeded.class = "embeded";
    embeded.innerHTML = data.html;

    element.appendChild(embeded);

}


async function getAllMessages(filter){
    data = await getData()

    mensajesBox.innerHTML = ""

    //Filter elements that include the text in the username or the content
    if (filter != null) {
        data = data.filter(function (element) {
            return element.username.toLowerCase().includes(filter.toLowerCase()) || element.content.toLowerCase().includes(filter.toLowerCase())
        })
    }

    data.map(function (element) {
        content = element.content
        id = element.id
        username = element.username

        div = document.createElement("div");
        div.style.width = "80%"
        div.class = "mensajeInChat"
        div.style.overflowWrap = "break-word"
        div.style.padding = "10px"
        div.style.border = "1px solid #aa42f5"
        div.style.borderRadius = "10px"
        if (modoOscuro == 'true') {
            div.style.backgroundColor = "black"
            div.style.color = "white"
            
        } else {
            div.style.backgroundColor = "white"
            div.style.color = "black"
        }
        div.style.margin = "10px"
        div.id = "mensaje" + id

        if (validarURL(content)) {
            if (urlImagen(content)) {
                div.innerHTML = username + ":<br> <img class='previews' src=" + content + ">"
            }
            else {
                div.innerHTML = username + ": <a href=" + content + ">" + content + "</a>"
                fetchAndEmbed(content, "mensaje" + id)
            }
        } else {
            div.innerHTML = username + ": " + content
        }



        if (username == "Joaquin Puente") {
            div.style.border = "1px solid #00aeff"
            div.style.marginLeft = "17%"
        }

        mensajesBox.appendChild(div);

    })

    imagenes = document.getElementsByClassName("previews")
    for (let i = 0; i < imagenes.length; i++) {
        element = imagenes[i]
        element.style.margin = "10px"
        element.style.maxWidth = "30%"
        element.style.maxHeight = "30%"
        element.style.borderRadius = "20px"
    }
} 

async function sendMessage(mensaje){
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "Joaquin Puente",
            "message": mensaje
        })
    });
    const data = await response.json();
    return data;
}

function isScrollAtBottom(element) {
    const atBottom = element.scrollHeight - element.scrollTop == element.clientHeight;
    return atBottom;
}

async function firstExecution(){
    getAllUsers()
    await getAllMessages(searchInputElement.value)
    mensajesArea.scrollTop = mensajesArea.scrollHeight

} 

firstExecution()

boton.addEventListener("click", async (event) => {
    data = input.value
    input.value = ""
    await sendMessage(data)
    await getAllMessages(searchInputElement.value)
    mensajesArea.scrollTop = mensajesArea.scrollHeight
})


searchInputElement.addEventListener('input', async (event) => {
    getAllMessages(searchInputElement.value)
})

setInterval(async function() {
    console.log(isScrollAtBottom(mensajesArea))

    await getAllUsers()
    if (isScrollAtBottom(mensajesArea)) {
        await getAllMessages(searchInputElement.value)
        mensajesArea.scrollTop = mensajesArea.scrollHeight
    } else {
        await getAllMessages(searchInputElement.value)
    }


}, 5000);





