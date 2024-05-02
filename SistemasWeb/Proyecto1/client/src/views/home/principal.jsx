import Header from "./header";
import Content from "./content";

function Principal() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default Principal;
