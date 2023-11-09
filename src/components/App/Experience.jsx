import React from "react"
import Timeline from "./Timeline"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3, faSass, faSquareJs, faNodeJs, faReact, faPhp, faLaravel, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import Mongo from "../Design/svgs/Mongo";
import Express from "../Design/svgs/Express";
import Mysql from "../Design/svgs/Mysql";

const Experience = () => {
  return (
    <main className="experienceContainer">

      <Timeline/>
      <section className="splash half">
        <div className="text">
            <h2>Skills</h2>
            <ul className="skills" style={{color:"white"}}>
              <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
              <li><FontAwesomeIcon icon={faCss3} /> CSS</li>
              <li><FontAwesomeIcon icon={faSass} /> SASS</li>
              <li><FontAwesomeIcon icon={faSquareJs} /> JavaScript</li>
              <li><FontAwesomeIcon icon={faNodeJs} /> Node.js</li>
              <li><Express/> Express.js</li>
              <li><FontAwesomeIcon icon={faReact} /> React</li>
              <li><Mongo/> MongoDB</li>
              <li><FontAwesomeIcon icon={faPhp} /> PHP</li>
              <li><FontAwesomeIcon icon={faLaravel} /> Laravel</li>
              <li><Mysql/> SQL</li>
              <li><FontAwesomeIcon icon={faGitAlt} /> Git</li>
            </ul>
            {/* <p>Hoewel ik beide frontend en backend doe, voel ik me het beste thuis in backend.</p>
            <p>Ik programmeer het liefst van al met PHP en het framework Laravel waarin ik al meerdere malen een volledig custom CMS systeem in maakte.</p>
            <p>Mijn passie ligt in het programmeren van websites en webapps. Design hoort hier natuurlijk vaak bij. Dit wilt zeggen dat ik zeker en vast gekend ben met Programma's zoals Photoshop, Illustrator, Indesign, Figma, XD en Sketch.</p>
            <p>Dat gezegd zijnde, Ik heb veel ervaring met HTML, CSS, JS, React, PHP, Laravel, MySQLi en Python.</p>
            <p>Verder zijn open source CMS systemen me niet onbekend (zoals Wordpress, Drupal, Shopify, &hellip;).</p>
            <p>Hier kan je nog eens mijn <a href="#" target="_blank" title="Linkedin profile">Linkedin</a> pagina bekijken voor meer details</p> */}
        </div>
    </section>
    </main>
  )
}
export default Experience