import React from 'react'
import { NavBar, NavItem } from '../components/NavBar'
import '../styles/UnderConstruction.css'

const UnderConstruction = () => {
  return (
    <div className="page contact-page">
        <div className="body">
            <div className="top-view construction-title-view" id="construction-title-view">
                <NavBar className='construction-nav'>
                <div className='nav-right'>
                    <NavItem text="Contact" link="/contact"/>
                    <NavItem text="Projects" link="/projects"/>
                    <NavItem text="Blog" link="/blog"/>
                </div>
                <div className="nav-left">
                    <NavItem text="Home" link="/"/>
                </div>
                </NavBar>
                <div className={"name-wrapper"} id="construction-title">
                    <h1 className='IBMPlex'>Page Under Construction</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UnderConstruction