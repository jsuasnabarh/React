import React from 'react'

export default function ListMenuItem(props) {
    console.log(props.listMenus)
    const listMenus = props.listMenus.map(item => (
        <>
            <ul className="nav" id="sidebar-nav-menu">
            <li key={item.seccion} className="menu-group"> {item.seccion} </li>
            <li className="panel">
                {
                    item.menu.map(men => (
                        <>
                            <a data-toggle="collapse" data-parent="#sidebar-nav-menu" className="active">
                                <i className="ti-dashboard"></i>
                                <span className="title">{men.nombre}</span>
                                <i className="icon-submenu ti-angle-left"></i>
                            </a>
                            <div id="dashboards" className="collapse in">
                                <ul className="submenu">
                                    {
                                        men.submenu.map(sm => (
                                            <li key={sm.nombre}> <a href="dashboard2.html">{sm.nombre}</a></li>
                                        ))
                                    } </ul>
                            </div>
                        </>
                    ))
                }
            </li>
            </ul>
        </>
    ))

    return (
        <>
            {
                listMenus
            }
        </>
    )
}
