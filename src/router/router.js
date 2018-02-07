import React from "react";
import {Route, Switch, Redirect} from "react-router";

// Components
import Projects from './../components/projects.js'
import About from './../components/about.js'
import Blog from './../components/blog.js'
import Error404 from './../components/error404.js'

function router() {
	return (
		<Switch>
			<Redirect exact from="/" to="/about" />
			<Route path = "/about" component = { About } />
			<Route path = "/blog" component = { Blog } />
			<Route path = "/proyectos" component = { Projects } />
			<Route component={ Error404 } />
		</Switch>
	);
}
export default router;
