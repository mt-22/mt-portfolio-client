import React from 'react'
import { NavBar, NavItem } from '../components/NavBar'
import ProjectList from '../components/ProjectList'
import '../styles/Projects.css'
import {data} from '../components/projects'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <div className="page project-page">
        <NavBar>
            <NavItem text="Home" link="/"/>
            <NavItem text="Contact" link="/contact" right={true}/>
            <NavItem text="Projects" link="#projects-view"/>
            <NavItem text="Blog" link="/blog"/>
        </NavBar>
        <div className="body">
            <div className='main-view' id="projects-view">
                <h2 className='section-heading' id="project-heading">Projects</h2>
                <ProjectList 
                props={data}
                />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Projects