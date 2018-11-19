import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import StatusBar from "./components/StatusBar";
import Home from "./components/Home";
import Personas from "./components/Personas";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import styled, { css } from "styled-components";
import store from "./store";

const padded = css`
  padding: 20px !important;
`;

const column = css`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  ${column};
  flex-shrink: 0;
  border-right: 1px solid black;
`;

const TopLeft = styled.div`
  ${padded};
  flex-shrink: 0;
  border-bottom: 1px solid black;
`;

const Bottom = styled.div`
  ${padded};
  flex-grow: 1;
  overflow-y: auto;
`;

const Right = styled.div`
  ${column}
  display: flex;
  flex: 1;
`;

const TopRight = styled.div`
  ${padded};
  flex-shrink: 0;
  border-bottom: 1px solid black;
`;

class App extends Component {
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
        <Provider store={store}>
          <React.Fragment>
            <Left>
              <TopLeft>
                <span>App Stuff</span>
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
                <div>
                  <span className="float-left">Other App Stuff</span>
                  <StatusBar />
                  <span className="clearfix" />
                </div>
              </TopRight>
              <Bottom>
                <div>
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
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
