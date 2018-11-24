import React, { Component } from "react";

class Input extends Component {
  state = {
    value: this.props.value || ""
  };

  // Callback Function
  onChange = event => {
    const {
      target: { value }
    } = event;
    this.changeStateValue(value);
    if (this.validateValue(value)) {
      this.props.onChange(event);
    }
  };

  changeStateValue(value) {
    this.setState({ value: value });
  }

  validateValue(value) {
    return this.props.onValidate(value);
  }

  render() {
    const { onValidate, ...props } = this.props;
    return (
      <input {...props} onChange={this.onChange} value={this.state.value} />
    );
  }
}

export default Input;
