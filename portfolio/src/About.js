import React from "react"
 
function About(props) {
  return (
    <div>
      <h3>{props.organization}</h3>
      <h4>{props.role}</h4>
      <p>{props.dates}</p>
      <p>{props.description}</p>
    </div>
  )
}
 
export default About;