import React from "react"

const ProjectList = ({ props }:any) => {
    if (props.length > 0) {
        return (
            <div className='projects-container'>
                {props.map((data:any) => {
                    return (
                    <div className='project-wrapper'>
                        <div className='project-info'>
                            <p>
                               {data.text}
                            </p>
                            <div className="project-link-wrapper">{data.link1 && <a href={data.link1.url} rel='noreferrer' target="_blank">{data.link1.label}</a>}
                            {data.link2 && <a href={data.link2.url} rel='noreferrer' target="_blank">{data.link2.label}</a>}</div>
                        </div>
                        <img 
                        className="project-image"
                        src={data.img}
                        alt="project"
                        />
                        <p className='project-label'>{data.label}</p>
                    </div>
                )})}
            </div>
        )
    }
    return (<></>)
}

export default ProjectList