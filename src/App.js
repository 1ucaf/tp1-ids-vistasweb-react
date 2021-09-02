import { useState } from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Table from './components/Table/Table';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import AltaProducto from './pages/Productos/AltaProducto';
import Productos from './pages/Productos/Productos';
import Usuarios from './pages/Usuarios/Usuarios';


export const rootPath = "";
export const rootApiPath = "http://localhost:4343";


const routes = [
  {
    title: "Home",
    path: rootPath + "/home"
  },
  {
    title: "Usuarios",
    path: rootPath + "/usuarios"
  },
  {
    title: "Productos",
    path: rootPath + "/productos"
  },
]


export function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function App() {
  const handleLogOut = () => {
    setSession("");
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  const [session, setSession] = useState(getCookie("session"));
  return (
    <div className="App">
      <Router>
        {/* <Link to="home"> home </Link>
        <Link to="login"> login </Link>
        <Link to="usuarios"> usuarios </Link> */}
        <NavBar routes={routes} rootPath={rootPath} handleLogOut={handleLogOut} session={session}></NavBar>
        <br/>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/usuarios">
            <Usuarios></Usuarios>
          </Route>
          <Route exact path="/productos">
            <Productos></Productos>
          </Route>
          <Route path="/productos/alta/:idProducto">
            <AltaProducto></AltaProducto>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
