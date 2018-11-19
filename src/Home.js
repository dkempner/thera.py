import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as BS from "styled-bootstrap-components";

const PinkButton = styled(BS.Button)`
  color: pink;
`;

class Home extends Component {
  render() {
    return (
      <BS.Container>
        <BS.Row>
          <BS.Column sm={4} />
          <BS.Column sm={4}>
            <Link to="/personas">
              <PinkButton primary>Choose your therapist</PinkButton>
            </Link>
          </BS.Column>
          <BS.Column sm={4} />
        </BS.Row>
      </BS.Container>
    );
  }
}
export default Home;
