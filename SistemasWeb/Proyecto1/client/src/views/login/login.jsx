import useForm from "../../hooks/useForm";

function Login() {

    const { values, handleChange, handleSubmit } = useForm({ uname: '', password: ''});

    const login = async () => {
      const response = await fetch("http://localhost:3030/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uname: values.uname,
          password: values.password,
        }),
      });
  
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("uname", data.uname);
        window.location.href = "/portal";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    };


    return (
        <div id="loginDiv" style={{
            display: "grid",
            placeItems: "center",
            height: "100dvh",
            backgroundColor: "rgb(036, 36, 36)",
            backgroundImage: "url('/src/assets/LoginWallp.jpg')"
        }}>
            <form id="loginForm" style={{
                display: "flex",
                flexDirection: "column",
                padding: "70px",
                border: "1px solid black",
                borderRadius: "20px",
                backgroundColor: "rgba(190,190,190,0.3)",
                boxShadow: "5px 5px",
                backdropFilter: "blur(4px)"
            }}
            onSubmit={handleSubmit(login)}>
                <h1 style={{
                    textAlign: "center",
                    marginBottom: "30px",
                    color: "white"
                }}>Iniciar sesión</h1>
                <label htmlFor="uname" style={{
                    marginBottom: "10px",
                    fontSize: "20px",
                    color: "white"
                }}>Nombre de usuario</label>
                <input type="text" name="uname" id="uname" required style={{
                    borderRadius: "20px",
                    padding: "5px",
                    border: "1px solid black",
                    backgroundColor: "rgba(190,190,190,0.5)",
                    color: "white"
                }}
                value={values.uname}
                onChange={handleChange}/>

                <label htmlFor="password" style={{
                    marginBottom: "10px",
                    fontSize: "20px",
                    color: "white"
                }}>Contraseña</label>
                <input type="password" name="password" id="password" required style={{
                    borderRadius: "20px",
                    padding: "5px",
                    border: "1px solid black",
                    backgroundColor: "rgba(190,190,190,0.5)",
                    color: "white"
                }}
                value={values.password}
                onChange={handleChange}/>

                <button type="submit" 
                disabled={values.uname === '' || values.password === ''}
                style={{
                    marginTop: "30px",
                    borderRadius: "20px",
                    padding: "5px",
                    backgroundColor: "#03cafc",
                    color: "white",
                    border: "none",
                    fontSize: "18px"
                }}
                >Iniciar sesión</button>
            </form>
        </div>
    )
}

export default Login;