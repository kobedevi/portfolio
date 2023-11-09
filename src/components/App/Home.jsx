import React, { useEffect } from "react"
import blob from "./blob.js"

const Home = () => {
  useEffect(() => {
    blob();
  })
  return (
    <main>
      <section className="splash">
          <div>
              <h1>Hey,<br/>I am <span>Kobe Devillé</span>,<br/>full-stack <span>web developer</span>.</h1>
              <a href="mailto:kobe.deville@gmail.com" className="btn" target="_blank" rel="noopener noreferrer">Contact me</a>
          </div>
          <div className="blob">
              <canvas id="lamp-anim" className="lamp-anim" width="100%" height="100%"></canvas>
          </div>
      </section>
    </main>
  )
}
export default Home