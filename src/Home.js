import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-4 text-center">
            <Link to="/personas">
              <button className="btn btn-primary">Choose your therapist</button>
            </Link>
          </div>
          <div className="col-sm-4" />
        </div>
      </div>
    );
  }
}
export default Home;
