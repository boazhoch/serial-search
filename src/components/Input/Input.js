import React, { Component } from "react";

import style from "./Input.module.css";

class Input extends Component {
  state = {
    value: this.props.value || "",
    isTouched: false,
    isValid: false
  };

  // Callback Function
  onChange = event => {
    const {
      target: { value }
    } = event;

    this.changeStateValue(value, true, this.validateValue(value));

    this.props.onHelperChange(value);

    if (this.state.isValid) {
      this.props.onChange(event);
    }
  };

  changeStateValue(value, isTouched, isValid) {
    this.setState({
      value: value,
      isTouched: isTouched || false,
      isValid: isValid || false
    });
  }

  validateValue(value) {
    return this.props.onValidate(value);
  }

  getValidClassName() {
    if (!this.state.isTouched) {
      return;
    }
    if (this.state.isValid) {
      return style["is-valid"];
    }
    return style["is-invalid"];
  }

  render() {
    const { onValidate, ...props } = this.props;
    return (
      <input
        className={`${style.input} ${this.getValidClassName()}`}
        {...props}
        onChange={this.onChange}
        value={this.state.value}
      />
    );
  }
}

export default Input;
