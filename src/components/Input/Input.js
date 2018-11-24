import React, { Component } from "react";

import style from './Input.module.css';

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

  render() {
    const { onValidate, ...props } = this.props;
    console.log(this.state, this.state.isTouched ? this.state.isValid ? style['is-valid'] : style['is-invalid'] : '', style);
    return (
      <input className={this.state.isTouched ? this.state.isValid ? style['is-valid'] : style['is-invalid'] : ''} {...props} onChange={this.onChange} value={this.state.value} />
    );
  }
}

export default Input;
