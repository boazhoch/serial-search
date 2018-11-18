import React, { Component } from "react";
import Input from "../Input/Input";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitButtonValue: this.props.submitButtonValue || "Submit"
    };
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.childInputs()}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
