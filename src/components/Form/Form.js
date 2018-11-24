import React, { Component } from "react";
import Input from "../Input/Input";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitButtonValue: this.props.submitButtonValue || "Submit"
    };

    this.state = {
      formControls: {}
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      formControls: {
        [name]: value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.render(this.handleChange, this.handleValidation)}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
