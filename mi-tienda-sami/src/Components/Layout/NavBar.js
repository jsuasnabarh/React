import React, { useState } from 'react'

export default function NavBar({params}) {
    const [name,setName] = useState('Joshua Default')

    return (
        <>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="brand">
                    <a href="index.html">
                        <img src="assets/img/logo-white.png" alt="Klorofil Pro Logo" className="img-responsive logo" />
                    </a>
                </div>
                <div className="container-fluid">
                    <div id="tour-fullwidth" className="navbar-btn">
                        <button type="button" className="btn-toggle-fullwidth"><i className="ti-arrow-circle-left"></i></button>
                    </div>
                    <div id="navbar-menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <span>{name}</span>
                                </a>
                                <ul className="dropdown-menu logged-user-menu">
                                    <li><a href="#"><i className="ti-user"></i> <span>Mi perfil</span></a></li>
                                    <li><a href="page-lockscreen.html"><i className="ti-power-off"></i> <span>Cerrar sesion</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
