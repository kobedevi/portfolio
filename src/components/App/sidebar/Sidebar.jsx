import React from 'react'
import { Link } from "react-router-dom";
import { PossibleRoutes } from "../../../core/routing";


const items = [
  {
    label: "Home",
    route: PossibleRoutes.Home,
    icon: <i className="fas fa-home fa-lg"></i>,
  },
  {
    label: "Experience",
    route: PossibleRoutes.Experience,
    icon: <i className="fas fa-sort-amount-up-alt fa-lg"></i>,
  },
  {
    label: "Projects",
    route: PossibleRoutes.Projects,
    icon: <i className="fas fa-laptop-code fa-lg"></i>,
  },
  {
    label: "Contact",
    route: "mailto:kobe.deville@gmail.com",
    icon: <i className="far fa-envelope fa-lg"></i>,
  }
];

const Sidebar = () => {
  return (
    <>
    <nav id="sidenav" className="sidenav">
		<div className="logo">Logo</div>
      	<div className='nav'>
			<ul>
			{items.map((item, key) => {
				return (
					<li key={item.route} className="nav-item">
						<Link key={key} className="nav-link" to={item.route} title={item.label}>
							{item.icon}
						</Link>
					</li>
				)
			})}
			</ul>
      </div>
      <div className="social">
          <ul>
              <li><a href="https://github.com/kobedevi" title="Github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
              <li><a href="https://linkedin.com/in/kobedev" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
      </div>
    </nav>
</>
  );
};

export default Sidebar;
