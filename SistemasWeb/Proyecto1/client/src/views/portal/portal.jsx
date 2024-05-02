import Header from "../home/header"
import Dashboard from "./dashboard"

function Portal() {
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
        }}>
            <Header/>
            <Dashboard/>
        </div>
    )
}

export default Portal;