import React, { Component } from "react";
import Home from "./Home";
import Personas from "./Personas";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"

class Router extends Component {
  constructor(props) {
    super(props);
    this.routes = [
      {
        path: "/",
        component: () => <Home />,
        exact: true
      },
      {
        path: "/personas",
        component: () => <Personas />
      }
    ];
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <div id="left" className="column">
            <div className="" id="top-left">
              My App
            </div>
            <div className="bottom">
              <ul className="list-unstyled">
                <li>Home</li>
                <li>Projects</li>
                <li>Users</li>
              </ul>
            </div>
          </div>
          <div id="right" className="column">
            <div id="top-right">
              Other App-y stuff
            </div>
            <div className="bottom">
              <div className="container">
                {this.routes.map(route => (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ))}
              </div>
            </div>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default Router;
