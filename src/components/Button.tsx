import React from 'react'
import './Button.css'

type ButtonProps = {
    text: string,
    className?: string,
    id?: string,
    onClick?: () => void,
}

const Button = ({text, className = "", id = "", onClick}:ButtonProps) => {
  return (
    <div 
    onClick={() => onClick && onClick()}
    className={"mt-button " + className}
    id={id}
    >
        {text}
    </div>
  )
}

export default Button