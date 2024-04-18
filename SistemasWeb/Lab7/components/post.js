function Post(props) {

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
    <div class="loader" id="loader"></div>
      <div
        id="postdata"
        style={{
          display: "none",
          width: "80%",
          height: "80vh",
          padding: "20px",
          alignText: "center",
        }}
      ></div>

    </div>
  );
}
