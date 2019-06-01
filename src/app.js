import React from "react";
import axios from "axios";
import { JobConfirm } from "./jobConfirm.js";
import { JobForm } from "./jobForm.js";
import { Jobs } from "./jobs.js";
import LoginOrRegister from "./loginorregister.js";
import Login from "./login.js";
import Register from "./register.js";
import UrgentChecked from "./urgentChecked.js";
import UrgentChecked2 from "./urgentChecked2.js";
import { BrowserRouter, Route } from "react-router-dom";
import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-129656531-1");
  ReactGA.pageview("/homepage");
}

export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/jobform" component={JobForm} />
          <Route path="/urgentChecked" component={UrgentChecked} />
          <Route path="/urgentChecked2" component={UrgentChecked2} />
          <Route path="/loginorregister" component={LoginOrRegister} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/jobConfirm" component={JobConfirm} />
          <Route
            path="/job/:id"
            render={props => <JobDetails {...props} key={props.match.url} />}
          />
          <Route exact="exact" path="/" component={Jobs} />
        </div>
      </BrowserRouter>
    );
  }
}
