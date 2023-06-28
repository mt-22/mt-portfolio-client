import React from 'react'
import { NavBar, NavItem } from '../components/NavBar'
import '../styles/UnderConstruction.css'
import BackgroundImage from '../media/construction.jpg'

const UnderConstruction = () => {
  return (
    <div className="page contact-page">
        <div className="body">
            <div className="top-view construction-title-view" id="construction-title-view">
            <img src={BackgroundImage} className='bg-image'/>
                <NavBar className='construction-nav'>
                    <NavItem text="Home" link="/"/>
                    <NavItem text="Contact" link="/contact" right={true}/>
                    <NavItem text="Projects" link="/projects"/>
                    <NavItem text="Blog" link="/blog"/>
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