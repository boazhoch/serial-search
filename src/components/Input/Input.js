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
      this.props.onChange(value);
    }
  };

  changeStateValue(value) {
    this.setState({ value: value });
  }

  validateValue(value) {
    return this.props.onValidate(value);
  }

  render() {
    return (
      <input
        {...this.props}
        type={this.props.type}
        onChange={this.onChange}
        placeholder={this.props.placeholder}
        value={this.state.value}
      />
    );
  }
}

export default Input;
