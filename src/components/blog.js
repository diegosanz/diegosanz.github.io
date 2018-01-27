import React, {Component} from "react";
import {Link} from 'react-router-dom';

export default class Blog extends Component {
	render() {
		return (
			<div>
				<h1>Blog</h1>
				<Link to={`/`} >Home</Link>
			</div>
		)
	}
}
