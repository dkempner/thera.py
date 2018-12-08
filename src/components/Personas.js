import React, { Component } from "react";
import { connect } from "react-redux";
import { setTherapist } from "../actions/therapistActions";
class Personas extends Component {
  constructor(props) {
    super(props);
    this.therapists = [{ name: "Peggy" }, { name: "Sue" }, { name: "Arnold" }];
    this.setTherapist = this.setTherapist.bind(this);
  }

  setTherapist(therapist) {
    this.props.setTherapist(therapist);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.therapist.name ? (
          <p>{this.props.therapist.name} is yourz therapist.</p>
        ) : (
          <p>Pick a therapist.</p>
        )}
        <ul className="list-unstyled">
          {this.therapists.map(therapist => (
            <li
              onClick={e => {
                this.setTherapist(therapist);
              }}
              key={therapist.name}
            >
              {therapist.name}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    therapist: state.therapist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTherapist: therapist => {
      dispatch(setTherapist(therapist));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Personas);
