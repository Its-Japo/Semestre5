import { useEffect, useState } from "react"

function Home() {

    const [user, setUser] = useState("")


    useEffect(() => {
        let username = sessionStorage.getItem("user")

        setUser(username)
    }, [])

    return (
      <div>
          <h1>Home</h1>
          <p>Bienvenido este es el home de {user}</p>
      </div>
    )
  }
  
  export default Home