import PropTypes from "prop-types";

function Selector({ title, onClick }) {
  let titleT = title ? title : "No hay datos"
  let onClickT = onClick ? onClick : () => { console.log("No hay función") }

  return (
    <div
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
    onClick={
      onClickT
    }>
      {titleT}
    </div>
  );
}

Selector.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

Selector.defaultProps = {
  title: "No hay datos",
  onClick: () => { console.log("No hay función") },
};


export default Selector;