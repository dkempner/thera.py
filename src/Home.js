import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as bs from "styled-bootstrap-components";

const PinkButton = styled(bs.Button)`
  color: pink;
`;

class Home extends Component {
  render() {
    return (
      <bs.Container>
        <bs.Row>
          <bs.Column sm={4} />
          <bs.Column sm={4}>
            <Link to="/personas">
              <PinkButton primary>Choose your therapist</PinkButton>
            </Link>
          </bs.Column>
          <bs.Column sm={4} />
        </bs.Row>
      </bs.Container>
    );
  }
}
export default Home;
