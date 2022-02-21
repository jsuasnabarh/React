import React from 'react'
import Footer from '../../Components/Layout/Footer'
import NavBar from '../../Components/Layout/NavBar'
import SideBar from '../../Components/Layout/SideBar'

export default function index() {
    return (<>
        <div id="wrapper">
            <NavBar />
            <SideBar />
            <Footer />
        </div>
    </>
    )
}
