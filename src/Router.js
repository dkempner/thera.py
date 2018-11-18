import React, { Component } from 'react';
import Home from './Home';
import Nav from './Nav';
import Personas from './Personas';
import { BrowserRouter, Route } from 'react-router-dom';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav></Nav>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/personas" component={Personas}></Route>
                </div>
            </BrowserRouter>
        );
    }
}
export default Router;
