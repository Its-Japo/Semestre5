function Selector(props) {
  let title = props.title ? props.title : "No hay datos"
  let content = props.content ? props.content : "No hay datos"
  let imagen = props.imagen ? props.imagen : null
    
  return (
    <div
      onClick={() => {
        changePost(title, content, imagen);
        console.log(imagen);
      }}
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
      {title}
    </div>
  );
}
