function Login() {


    async function savaInputData(user, pass) {
      if (user == "Japo" && pass == "password") {
        sessionStorage.setItem("user", user);
      }
      else {
        alert("Usuario o contraseña incorrecta");
        sessionStorage.setItem("user", "")
      }
    };


    return (
      <div>
          <h1>Login</h1>

          <form>
            <label>
              <p>Username</p>
              <input type="text" name="user" id="username"/>
            </label>

            <label>
              <p>Password</p>
              <input type="password" name="password" id="password"/>
            </label>

            <div>
              <button type="submit" onClick={
                () => {
                  let user = document.getElementById("username").value;
                  let pass = document.getElementById("password").value;
                  savaInputData(user, pass);
                }
              }>Submit</button>
            </div>

          </form>
      </div>
    )
  }
  
  export default Login