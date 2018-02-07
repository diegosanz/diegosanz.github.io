import React, {Component} from "react";
import {Link} from 'react-router-dom';

import Container from './container.js'
import TopNavbar from './navbar.js'

export default class Blog extends Component {
	render() {
		return (
			<Container>
				<TopNavbar/>
				<h1 className="title">Blog</h1>
			</Container>
		)
	}
}
