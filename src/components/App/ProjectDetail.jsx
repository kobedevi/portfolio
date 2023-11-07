import React from "react"
import { Link, useParams } from "react-router-dom";
import projectslist from "./projectslist.json"
import ErrorAlert from "../shared/ErrorAlert";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProjectDetail = () => {

  const { id } = useParams();
  const error = projectslist[id] === undefined || projectslist[id] === null;
  
  return (
    <>
    {
      error && <ErrorAlert message={'project does not exist'}/>
    }
    { 
      !error && (
        <section className="project">
          <div className="imgContainer">
            <img className="projectBanner" src={projectslist[id].img} alt="project banner" />
          </div>
            <div className="projectContainer">
              <h2>{projectslist[id].title}</h2>
              {projectslist[id].body.map((p) => {
                return <p>{p}</p>
              })}
              {
                projectslist[id].credentials !== null ? projectslist[id].credentials.map((c) => 
                    <code>{c}</code>
                  ) : ''
              }
              {projectslist[id].link ? <p><a href={projectslist[id].link}>{projectslist[id].link}</a></p> : ''}
              {
                projectslist[id].body2 !== null && projectslist[id].body2.map((p) => {
                  return <p>{p}</p>
                })
              }
              {projectslist[id].githubLink ? <p><a href={projectslist[id].githubLink}>{projectslist[id].githubLink}</a></p> : ''}
          {projectslist[id].gallery.length >0 ? <ReactImageGallery items={projectslist[id].gallery}/>: ''}
          </div>
        </section>
      )
    }
    </>
  )
}
export default ProjectDetail