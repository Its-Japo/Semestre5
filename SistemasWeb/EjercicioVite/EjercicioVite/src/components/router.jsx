import Home from "../view/home"
import Login from "../view/login"

function Router({ ruta }) {
    switch (ruta) {
        case "/home":
            return <Home></Home>
        case "/login":
            return <Login></Login>
        default:
            return (
                <div>
                    <h1>Ruta actual {ruta}</h1>
                </div>
            )
    }
}

export default Router