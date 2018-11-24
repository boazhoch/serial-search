import React, { Component } from "react";
import DataFetch from "../../service/data-fetch";
import CONFIG from "../../config/config";
import SerialSearch from "../../service/serial-search";
import Form from "../Form/Form";
import Input from "../Input/Input";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.fetcher = new DataFetch(new SerialSearch(CONFIG.BACK_END_END_POINT));
  }
  state = {
    value: ""
  };

  handleChange = (value, name) => {
    this.setState({ [name]: value });
  };

  handleValidation = value => {
    if (value.length === 12) {
      return true;
    }
    this.handleChange("");
    return false;
  };

  handleSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        render={(formControlOnChange, handleValidation, errorHandler) => {
          return (
            <Input
              type={"text"}
              name={"userName"}
              placeholder={"enter your serial number"}
              onValidate={this.handleValidation}
              onChange={formControlOnChange}
            />
          );
        }}
      />
    );
  }
}

export default SearchBar;
