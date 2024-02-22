
doc = document;

boton = doc.getElementById("enviar")
input = doc.getElementsByClassName("mensaje-chat")[0]


document.addEventListener('keydown', (event)=> {    
    if (event.key === "Enter") {
        event.preventDefault();
        boton.click();
        console.log("Enter pressed");
    }
});


  