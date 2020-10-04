import React from "react"
 
function Experience(props) {
  return (
    <div>
      <div class="timeline-bullet"></div>
      <div class="timeline-header">
        <p class="date">{props.date}</p>
        <span class="divider"> | </span>
        <p class="location">{props.location}</p>
      </div>
      <h3>{props.company}</h3>
      <h4>{props.role}</h4>
    </div>
  )
}
 
export default Experience;