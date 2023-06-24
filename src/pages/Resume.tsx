import React from 'react'
import Document from 'react-pdf'

const Resume = () => {
  return (
    <div style={{height:"100vh", width:"100%", margin:0}}>
        <iframe src="https://docs.google.com/gview?url=https://github.com/mt-22/mt-22.github.io/raw/main/mtaylor_resume_5-3-23.pdf&embedded=true"
        style={{width:"100%", height:"100%"}}
        />
    </div>
  )
}

export default Resume