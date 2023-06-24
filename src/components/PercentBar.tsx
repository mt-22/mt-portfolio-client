import React from 'react'

type PercentBarProps = {
    percent: number,
    className?: string,
    id?: string
}

const PercentBar = ({percent, className="", id=""}:PercentBarProps) => {
    const outStyle = {
        width: "1rem",
        height: "300px",
        background: "#CECECE",
        display: "flex",
        alignItems: "flex-end"
    }
    const tempStyle = {
        width: "100%",
        height: `${percent}%`,
        display: "flex",
        alignItems: "flex-end"
    }
    const inStyle = {
        width: "100%",
        height: "100%",
        background: "#FF4B3E",
    }
  return (
        <div className={className} style={outStyle}>
            <div style={tempStyle} className={className + "-temp"}>
                <div style={inStyle} className={className + '-inner'}/>
            </div>
        </div>
  )
}

export default PercentBar