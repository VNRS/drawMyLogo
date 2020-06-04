//@flow

import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"

function AdminLinks() {
	return <>
		<Router>
			<ul>
				<li>
					<Link to="/status/list"> All status </Link>
					<Link to="/admin/login"> Admin Login </Link>
				</li>
			</ul>
			<div>
				<Switch>
					<Route exact path="/status/list" Status/>
					<Route exact path="/admin/login" Login/>
				</Switch>
			</div>
		</Router>
	</>;
}

export default function AdminHome() {
	return (<div> Admin Home </div>);
}


