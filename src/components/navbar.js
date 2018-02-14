import React, {Component} from "react"
import {Link} from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const Navbar = styled.nav`
	&&& {
		margin: 15px 0;
		background: black;
		color: white;
	}
`

const NavbarLink = styled(Link)`
	&&& {
		background: black;
	}

	&&&:hover {
		background: #1F1F1F;
	}
`

export default class TopNavbar extends Component {

	render() {
		return (
			<Navbar className="navbar" role="navigation" aria-label="main navigation">
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
						<NavbarLink to={`/blog`} className="navbar-item" style={{ color: "white" }}>Blog</NavbarLink>
						<NavbarLink to={`/about`} className="navbar-item" style={{ color: "white" }}>Acerca de mí</NavbarLink>
						<NavbarLink to={`/proyectos`} className="navbar-item" style={{ color: "white" }}>Proyectos</NavbarLink>
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
			</Navbar>
		);
	}
}
