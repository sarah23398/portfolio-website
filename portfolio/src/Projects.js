import React from "react";
 
function Projects(props) {
  return (
    <div className="grid-project-info">
          <h3>{props.name}</h3>
          <a href={props.link}></a>
          <h4>{props.location}</h4>
          <p>{props.date}</p>
    </div>
  )
}
 
export default Projects;