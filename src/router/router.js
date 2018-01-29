import React from "react";
import {Route} from "react-router";

// Components
import Home from './../components/home.js'
import About from './../components/about.js'
import Blog from './../components/blog.js'

function router() {
	return (
		<div>
			<Route exact path = "/" component = { Home } />
			<Route path = "/about" component = { About } />
			<Route path = "/blog" component = { Blog } />
		</div>
	);
}
export default router;
