import React from 'react'
import './Button.css'

type ButtonProps = {
    text: string,
    className?: string,
    id?: string,
    onClick?: () => void,
    disabled?: boolean,
}

const Button = ({text, className = "", id = "", onClick, disabled = false}:ButtonProps) => {
  return (
    <div 
    onClick={() => !disabled && onClick && onClick()}
    className={"mt-button " + className + (disabled ? " disabled" : "")}
    id={id}
    style={disabled ? {opacity: 0.5, pointerEvents: 'none', cursor: 'not-allowed'} : {}}
    >
        {text}
    </div>
  )
}

export default Button