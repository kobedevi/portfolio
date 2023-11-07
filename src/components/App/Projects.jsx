import React from "react"
import Card from "../Design/Card"
import projectslist from "./projectslist.json"

const Projects = () => {
  return (
    <section className="splash">
      <div className="text">
          <h2>Projects</h2>

          <div id="projectsContainer">
            {
              projectslist.map((proj, index) => 
                <Card
                  key={index}
                  img={proj.img}
                  title={proj.title}
                  body={proj.excerpt}
                  projectId={index}
                />
              )
            }
          </div>

      </div>
    </section>
  )
}
export default Projects