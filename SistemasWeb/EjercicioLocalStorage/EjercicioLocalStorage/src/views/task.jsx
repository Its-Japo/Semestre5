import Home from "../view/home"
import Login from "../view/login"

function Router({ ruta }) {
    switch (ruta) {
        case "/tasklist":
            return <Tasklist></Tasklist>
        case "/task":
            return <Task></Task>
        default:
            return (
                <div>
                    <h1>Ruta actual {ruta}</h1>
                </div>
            )
    }
}

export default Router