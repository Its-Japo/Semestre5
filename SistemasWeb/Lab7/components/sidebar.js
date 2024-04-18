function Sidebar() {
  const [listadoMatematicos, setListadoMatematicos] = React.useState([]);

  async function llamarDatos() {
    let posts = await fetchPosts();
    setListadoMatematicos(posts);
  }
  
  React.useEffect(() => {
    llamarDatos();
  }, []);
  
  if (!("error" in listadoMatematicos)) {
    if (listadoMatematicos.length === 0) {
      return (
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
      );
  } else {
    console.log(listadoMatematicos);
    setTimeout(() => {
      changePost(listadoMatematicos[0].title, listadoMatematicos[0].content, listadoMatematicos[0].image_base64)
    }, 3000)
    return (
      <div
        style={{
          width: "15%",
          height: "90vh",
          backgroundColor: "#333",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {listadoMatematicos.map((elemento) => {
          return (
              <Selector
                title={elemento.title}
                content={elemento.content}
                imagen={elemento.image_base64}
              />
          );
        })}
      </div>
    );
  }
  } else {
    return (
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
    );
  }
  
  
    
}
