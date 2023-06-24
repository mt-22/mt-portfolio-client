import React from 'react'



type INavItem = {
  link: string,
  text: string
}
export const NavItem = ({link, text}:INavItem) => {
  return (
    <a className='nav-item' href={link}>{text}</a>
  )
}

type NavProps = {
  className?: string
  children: React.ReactNode;
}

export const NavBar = (props:NavProps) => {
  return (
    // <div className="nav-bar">
    //     <div className='nav-left'>
    //         <a className='nav-item' href='#top-view'>Top</a>
    //         <a className='nav-item' href='#about-view'>About Me</a>
    //         <a className='nav-item' href='#hardskills-view'>Technical Skills</a>
    //         <a className='nav-item' href='#softskills-view'>Soft Skills</a>
    //         <a className='nav-item' href='#experience-view'>Experience</a>
    //     </div>
    //     <div className='nav-right'>
    //         <a className='nav-item' href='/contact'>Contact</a>
    //         <a className='nav-item' href=''>Projects</a>
    //         <a className='nav-item' href=''>Blog</a>
    //     </div>
    // </div>
    <div className={'nav-bar ' + props.className}>
      {props.children}
    </div>
  )
}

// export default NavBar