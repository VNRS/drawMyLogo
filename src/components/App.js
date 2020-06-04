// @flow
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from "../pages/Home"
import AdminHome from "../pages/AdminHome"
import LostId from "../pages/LostId"
import Profile from "../pages/Profile"
import Request from "../pages/Request"
import Status from "../pages/Status"

export default function App() {
  return (
    <Router>
      <div>
        {' '}
        <h1>Create my Logo </h1>{' '}
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/admin">Admin Home</Link>
          <Link to="/req">New Request</Link>
          <Link to="/status/123">Request Status</Link>
          <Link to="/profile">Designer Profile</Link>
          <Link to="/lostId">Forgot Id ?</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/admin" component={AdminHome}/>
          <Route exact path="/req/" component={Request}/>
          <Route exact path="/status/:reqId" component={Status}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/lostId" component={LostId}/>
        </Switch>
      </div>
    </Router>
  );
}
