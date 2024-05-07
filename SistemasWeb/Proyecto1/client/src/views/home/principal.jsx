import HeaderLogin from "./headerLogin";
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
      <HeaderLogin></HeaderLogin>
      <Content></Content>
    </div>
  );
}

export default Principal;
