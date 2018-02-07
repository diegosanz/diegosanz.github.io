import React, {Component} from "react"
import {Link} from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class TopNavbar extends Component {

	render() {
		return (
			<nav style={{ margin: '15px 0', background: "black", color: "white" }} className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link to={`/`} className="navbar-item" style={{ color: "orange", fontWeight: "bold", marginLeft: "16px" }}>Diego Sanz</Link>

					<button className="button navbar-burger">
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>

				<div className="navbar-menu">
					<div className="navbar-start">
						<Link to={`/blog`} className="navbar-item" style={{ color: "white" }}>Blog</Link>
						<Link to={`/about`} className="navbar-item" style={{ color: "white" }}>Acerca de mí</Link>
						<Link to={`/proyectos`} className="navbar-item" style={{ color: "white" }}>Proyectos</Link>
					</div>

					<div className="navbar-end">
						<div className="navbar-item" style={{marginRight: "16px"}}>
							<div className="field is-grouped">
								<p className="control">
									<a className="bd-tw-button button" data-social-network="Github" target="_blank" href="https://github.com/diegosanz">
										<span>
											<FontAwesomeIcon icon={["fab", "github"]} size="lg" /> GitHub
										</span>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
