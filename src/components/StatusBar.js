import React, { Component } from "react";
import { connect } from "react-redux";

class StatusBar extends Component {
  render() {
    return <span>{this.props.therapist.name}</span>;
  }
}

const mapStateToProps = state => {
  return {
    therapist: state.therapist
  };
};

export default connect(
  mapStateToProps,
  null
)(StatusBar);
