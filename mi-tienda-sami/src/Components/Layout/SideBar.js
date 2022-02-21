import React from 'react'
import Menu from './Menu'

export default function SideBar({ params }) {


  return (
    <div id="sidebar-nav" className="sidebar">
      <nav>
        <Menu />
        <button type="button" className="btn-toggle-minified" title="Toggle Minified Menu"><i className="ti-arrows-horizontal"></i></button>
      </nav>
    </div>
  )
}
