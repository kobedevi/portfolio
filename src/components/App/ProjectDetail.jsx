import React from "react"
import { Link, useParams } from "react-router-dom";
import projectslist from "./projectslist.json"
import ErrorAlert from "../shared/ErrorAlert";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProjectDetail = () => {

  const { id } = useParams();  
  const error = projectslist[id] === undefined || projectslist[id] === null;
  
  
  const renderVideo = (item) => {
    return (
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="600"
          src={item.embedUrl}
          allowFullScreen
          title="ex"
        />
      </div>
    );
  };

  if(!error) {
    console.log('tests')
    projectslist[id].gallery.forEach(el => {
      if(el.hasOwnProperty('embedUrl')) {
        el.renderItem = renderVideo.bind(this)
      }
    });
  }

  return (
    <main>
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
              {projectslist[id].stack ? <span className="tag stack">{projectslist[id].stack.join(', ')}</span> : ''}<br/>
              {projectslist[id].body.map((p, index) => {
                return <p key={index}>{p}</p>
              })}
              {
                projectslist[id].credentials !== null ? projectslist[id].credentials.map((c, index) => 
                    <code key={index}>{c}</code>
                  ) : ''
              }<br/>
              {projectslist[id].link ? <p><a href={projectslist[id].link} target="_blank" rel="noopener noreferrer" title="Project link">{projectslist[id].link}</a></p> : ''}
              {
                projectslist[id].body2 !== null && projectslist[id].body2.map((p, index) => {
                  return <p key={index}>{p}</p>
                })
              }
              {projectslist[id].githubLink ? <p><a href={projectslist[id].githubLink} target="_blank" rel="noopener noreferrer" title="Github link">{projectslist[id].githubLink}</a></p> : ''}
              {projectslist[id].gallery.length > 0 ? 
                <ReactImageGallery 
                  items={projectslist[id].gallery}
                  showIndex
                  showPlayButton
                />
              : ''}
          </div>
        </section>
      )
    }
    </main>
  )
}
export default ProjectDetail