import React from "react";
 
function Projects(props) {
  return (
    <div class="grid-item">
        <img src={props.image} alt="Project Image"/>
        <h3>{props.name}</h3>
        <a href={props.link}></a>
        <h4>{props.location}</h4>
        <p>{props.date}</p>
        <p>{props.description}</p>
    </div>
  )
}
 
export default Projects;