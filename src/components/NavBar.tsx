import React, { useState } from 'react'
import MenuLines from '../media/menu-lines.svg?react'



type INavItem = {
  link: string,
  text: string,
  className?: string,
  right?: boolean
}
export const NavItem = ({link, text, right, className=""}:INavItem) => {
  return (
    <a className={'nav-item ' + className + (right ? 'nav-item-right' : "")} href={link}>{text}</a>
  )
}

type NavProps = {
  className?: string
  children: React.ReactNode;
}

export const NavBar = (props:NavProps) => {
  const [showMenu, setShowMenu] = useState(false)

  const menuClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className={'nav-bar ' + (props.className ? props.className : "") + (showMenu ? " nav-bar-menu" : "")}>
      <MenuLines 
      className='menu-lines'
      onClick={menuClick}
      />
      {props.children}
    </div>
  )
}

// export default NavBar