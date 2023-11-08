const Timeline = () => {
  return (
    <section className="splash half timeline">
        <div className="text">
          <div className="textcontainer">
          <h2>Experience</h2>
          <ul className="experience">

            <li>
              <div>
                <h3>ICT User support</h3>
                <span>Arteveldehogeschool, Ghent | Oct 2021 - June 2023</span>
                <span className="tag">Jobstudent</span>
                <ul>
                  <li>Solving users IT problems</li>
                  <li>Managing, distributing, repairing, upgrading and replacing PC's and laptops (on location)</li>
                  <li>Usage of tools such as:</li>
                  <ul>
                    <li>MECM/SCCM</li>
                    <li>Active Directory</li>
                    <li>Topdesk</li>
                  </ul>
                </ul>

              </div>
            </li>

            <li>
              <div>
                <h3>Internship Full-stack developer</h3>
                <span>Pàu, Antwerp | April - June 2022</span>
                <span className="tag">Internship</span>
                Full-stack web developer at Studio Pàu:
                <ul>
                  <li>Building fully custom web applications for big clients</li>
                  <li>Usage of languages, frameworks and libraries such as:</li>
                  <ul>
                    <li>Typescript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>NestJS</li>
                    <li>Postgres</li>
                    <li>Jest</li>
                  </ul>
                </ul>
              </div>
            </li>
            
            <li>
              <div>
                <h3>VR Host</h3>
                <span>The Park Playground, Ghent | Nov 2019 - April 2022</span>
                <span className="tag">Jobstudent</span>
                Guiding the customer:
                <ul>
                  <li>Explaining the hardware and software to customers</li>
                  <li>Fast (technical) troubleshooting</li>
                  <li>Act as bar, intro, freeroam and superhost (manager role)</li>
                </ul>
              </div>
            </li>

            <li>
              <div>
                <h3>Webmaster</h3>
                <span>Colruyt Group, Halle | Aug 2017 - Jan 2022</span>
                <span className="tag">Jobstudent</span>
                <ul>
                  <li>
                    Updating and maintaining Colruyt group websites via custom CMS systems and Adobe Experience:
                    <ul>
                      <li>Bio-Planet</li>
                      <li>Collect & go</li>
                      <li>Colruyt</li>
                      <li>Okay</li>
                      <li>Spar</li>
                    </ul>
                  </li>
                  <li>Creating and sending HTML emails via Acoustic/Silverpop</li>
                  <li>Create new content for campaigns</li>
                </ul>
              </div>
            </li>
          </ul>

          <h2 style={{marginTop:"6rem"}}>Education</h2>
          <ul className="experience">

            <li>
              <div>
                <h3>New Media Development</h3>
                <span>Arteveldehogeschool, Ghent | 2018 - 2023</span>
                <span className="tag">Bachelor's degree</span>
                Professional bachelor's degree in Graphics and Digital
                media,<br/>specializing in New Media
                development.<br/>
                Training to become a full stack web developer

              </div>
            </li>

            <li>
              <div>
                <h3>Elektronica-ICT</h3>
                <span>Odisee, Ghent | 2017 - 2018</span>
                Bachelor's degree in everything IT:<br/>
                (web development, CCNA, system administrator)
              </div>
            </li>
            
            <li>
              <div>
                <h3>Se-n-Se Interactive Multimedia</h3>
                <span>Don Bosco, Halle | 2016 - 2017</span>
                specialization year in which the knowledge as a web developer and multimedia was further expanded with PHP, MySQLi, JavaScript, JQuery and 3D modeling (Blender).
              </div>
            </li>

            <li>
              <div>
                <h3>Multimedia</h3>
                <span>Don Bosco, Halle | 2010 - 2016</span>
                High school education in Multimedia, aiming to learn the basics of web development and more in the creative industry.
              </div>
            </li>
 
          </ul>
        </div>
        </div>
    </section>
  )
}
export default Timeline