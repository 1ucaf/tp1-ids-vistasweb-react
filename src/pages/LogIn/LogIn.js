import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Alert from '@material-ui/lab/Alert';

const LogIn = (props) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [succeed, setSucceed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") { //Para que ejecute el login cuando el usuario aprieta enter con el teclado
                handleLogin();
                event.preventDefault();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
    }, [user, pass]); //only re-run the effect if user or password changes

    const onChangeUser = e => {
        setUser(e.target.value)
    }
    const onChangePass = e => {
        setPass(e.target.value)
    }


    //TODAVÍA NO ESTÁ SIENDO USADO
    const handleLogin = () => {
        setLoading(true);
        // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        if(user !== "" && pass !== "") {
          axios.post("http://LoginAPI/login", {
            UserName: user,
            UserPass: pass,
          })
          .then(function(response) {
              if(response.data) {
                // const expireDay = new Date(new Date().setDate(new Date(Date.now()).getDate() + 365));
                const expireDay = new Date(new Date().getTime() + 20*60000);
                const expireDayString = expireDay.toUTCString();
                document.cookie = `session=${response.data.UserName}; expires=${expireDayString}; path=/;`;
                document.cookie = `token=${response.data.Token}; expires=${expireDayString}; path=/;`;
                props.setSession(response.data.UserName);
                setErrorMessage("");
                setSucceed(true);
                setLoading(false);
              }
              else {
              }
            }
          )
          .catch(function (error) {
            if(error.response)
            {
                setLoading(false);
                console.log(error.response.status);
                if(error.response.status === 404)
                    setErrorMessage("Usuario no existente.");
                if(error.response.status === 403)
                    setErrorMessage("Usuario o Contraseña incorrectos.");
                if(error.response.status === 401)
                    setErrorMessage("No tiene permisos para acceder a esta página.");
                if(error.response.status === 500) {
                    setErrorMessage("Error interno del servidor. Excepción en consola");
                    console.log(error.response.data);
                }
            }
            else {
                setLoading(false);
                console.log(error);
                setErrorMessage("Servidor rechazó la petición");
                setErrorMessage(error.toString());
            }
          });
          
        } else {
            setLoading(false);
            setErrorMessage("Debe ingresar Usuario y Contraseña!");
        }
      }

    const containerStyles = {
        padding: "40px",
        borderRadius: "25px",
        margin: "auto",
        maxWidth: "500px",
        backgroundColor: "rgba(255, 255, 255, 0.8)"
    }
    const buttonBoxContainer = {
         display: "flex",
         width: "100%",
         justifyContent: "flex-end",
    }
    return (
        <div style={containerStyles}>
            <form>
                <h1 style={{textAlign:"center"}}>Iniciar Sesión</h1>
                { errorMessage? <Alert severity="error" onClose={() => {setErrorMessage(undefined)}}>{errorMessage}</Alert> : <></> }
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <div style={buttonBoxContainer}>
                    <button onClick={(e)=>{e.preventDefault(); setErrorMessage("Usuario o contraseña incorrectos. Inténtelo de nuevo!"); console.log("login")}} className="btn btn-primary">LogIn</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn
