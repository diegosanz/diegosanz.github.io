import React from "react";
import {Route, Switch} from "react-router";

// Components
import Home from './../components/home.js'
import About from './../components/about.js'
import Blog from './../components/blog.js'
import Error404 from './../components/error404.js'

function router() {
	return (
		<Switch>
			<Route exact path = "/" component = { Home } />
			<Route path = "/about" component = { About } />
			<Route path = "/blog" component = { Blog } />
			<Route component={ Error404 } />
		</Switch>
	);
}
export default router;
