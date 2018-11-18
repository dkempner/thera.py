import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as bs from "styled-bootstrap-components";
class Home extends Component {
  render() {
    return (
      <bs.Container>
        <bs.Row>
          <bs.Column sm={4} />
          <bs.Column sm={4}>
            <Link to="/personas">
              <bs.Button primary style={{ backgroundColor: "pink" }}>
                Choose your therapist
              </bs.Button>
            </Link>
          </bs.Column>
          <bs.Column sm={4} />
        </bs.Row>
      </bs.Container>
    );
  }
}
export default Home;
