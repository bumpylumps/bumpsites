import React from 'react'

const Project = ({ name, description, imgSrc, imgAlt, githubLink, demoLink }) => {
  return (
    <>
        <img src={imgSrc} alt={imgAlt}/>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={demoLink}>Demo</a>
        <a href={githubLink}>Github</a>
    </>
  )
}

export default Project
