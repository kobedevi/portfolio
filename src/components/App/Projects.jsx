import React from "react"
import Card from "../Design/Card"
import projectslist from "./projectslist.json"

const Projects = () => {
  return (
    <main>
      <section className="splash">
        <div className="text pr">
            <h2>Projects</h2>

            <div id="projectsContainer">
              {
                projectslist.map((proj, index) => 
                  <Card
                    key={index}
                    img={proj.img}
                    title={proj.title}
                    stack={proj.stack}
                    body={proj.excerpt}
                    projectId={index}
                  />
                )
              }
            </div>

        </div>
      </section>
    </main>
  )
}
export default Projects