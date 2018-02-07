import React, {Component} from "react";
import {Link} from 'react-router-dom';

import Container from './container.js'
import TopNavbar from './navbar.js'

export default class Projects extends Component {
	render() {
		return (
			<Container>
				<TopNavbar/>
				<h1 className="title">Proyectos</h1>
			</Container>
		)
	}
}
