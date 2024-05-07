function HeaderLogin() {
    return (
      <div
        style={{
          width: "100%",
          height: "10vh",
          backgroundColor: "rgb(36, 36, 36)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "26px",
          backgroundImage: "url('/src/assets/HeaderWallp.jpg')"
        }}
      >
        <h1>Matemáticos de la Historia</h1>
        <a href="/admin" style={{
          position: "absolute",
          right: "10px",
          top: "15px",
          fontSize: "20px",
          textDecoration: "none",
          backgroundColor: "#fff7c7",
          padding: "20px",
          borderRadius: "20px",
          color: "#453200",
          border: "2px solid black"
        }}>Iniciar Sesión</a>
      </div>
    );
}
  
export default HeaderLogin;
  