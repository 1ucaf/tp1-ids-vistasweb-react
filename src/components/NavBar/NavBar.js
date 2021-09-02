import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

var sideMenuOpening = false;
const NavBar = (props) => {
    const rootPath = props.rootPath;
    // const session = props.session;
    const session = "asdf";
    return (
        <>
            <ul >
                {props.routes?.map((route, index)=>{
                    return(
                        <li>
                            <Link key={index} to={route.path} className="header-link">
                                {route.title}
                            </Link>
                        </li>
                    )
                })}
                <li style={{float:"right"}}>
                    <Link class="active" to="/LogIn">Iniciar Sesión</Link>
                </li>
            </ul>
            {/* {(!session || session === "") ?
            <>
            </>
            :
            <>
                <div id="mySidenav" className="sidenav">
                    <a className="closebtn close-menu-btn" onClick={closeNav}>&times;</a>
                    <h1 className="sidenav-title">Material Planning Tucumán</h1>
                    <hr></hr>
                    {props.routes?.map((route, index)=>{
                        return(
                            <Link key={index} to={route.path} className="header-link">
                                <h2>{route.title}</h2>
                            </Link>
                        )
                    })}
                </div>
            </>
            }
                
            <div className="sdds-example-navbar">
                <nav className="sdds-navbar">
                    {(!session || session === "") ?
                    <>
                    </>
                    :
                    <>
                        <div id="buttonOpenSideMenu" className="sdds-navbar-application-brand" style={{fontSize:30, cursor: "pointer"}} onClick={openNav}>
                            <span>&#9776;</span>
                        </div>
                    </>
                    }
                    <div id="topNavbarTitle" className="sdds-navbar-application-brand sdds-headline-03" >
                        Material Planning Tucumán
                    </div>
                    <div id="side-menu" className="sdds-navbar-collapsible"></div>
                    <div className="sdds-navbar-menu-toolbar">
                        <div className="sdds-navbar-menu-item-link sdds-headline-03 header-item">
                            {(!session || session === "") ? 
                                <Link to={rootPath+"/login"} className="header-link"> Iniciar Sesión </Link> :
                                <Link to={rootPath} className="header-link" onClick={props.handleLogOut}> Cerrar sesión </Link>
                            }
                        </div>
                    </div>
                    <Link to={rootPath} className="sdds-navbar-scania-brand"/>
                </nav>
            </div> */}
        </>
    )
}

export default NavBar
