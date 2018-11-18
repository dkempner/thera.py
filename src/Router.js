import React, { Component } from "react";
import Home from "./Home";
import Personas from "./Personas";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import styled from "styled-components";

const column = `
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  ${column}
  flex-shrink: 0;
  border-right: 1px solid black;
`;

const TopLeft = styled.div`
  flex-shrink: 0;
  border-bottom: 1px solid black;
`;

const Bottom = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

const Right = styled.div`
  ${column}
  display: flex;
  flex: 1;
`;

const TopRight = styled.div`
  flex-shrink: 0;
  border-bottom: 1px solid black;
`;

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
          <Left>
            <TopLeft>
              <span className="padded">App Stuff</span>
            </TopLeft>
            <Bottom>
              <ul className="list-unstyled padded">
                <li>Home</li>
                <li>Projects</li>
                <li>Users</li>
              </ul>
            </Bottom>
          </Left>
          <Right>
            <TopRight>
              <span className="padded">Other App Stuff</span>
            </TopRight>
            <Bottom>
              <div className="padded">
                {this.routes.map(route => (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ))}
              </div>
            </Bottom>
          </Right>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default Router;
