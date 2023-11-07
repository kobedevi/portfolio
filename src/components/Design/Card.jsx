import { Link } from "react-router-dom"
import { PossibleRoutes, route } from "../../core/routing"
import LinesEllipsis from 'react-lines-ellipsis'

const Card = ({title, img, body, projectId}) => {
  return (
    <Link to={route(PossibleRoutes.ProjectDetail, { id: projectId })}>
        <div className="projectCard">
            <div className="imgContainer">
                <img src={img} alt="Project banner"/>
            </div>
            <article>
                <h3>{title}</h3>
                <p>
                <LinesEllipsis
                    text={body}
                    maxLine='4'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                />
                </p>
            </article>
        </div>
    </Link>
  )
}
export default Card