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
    value: "",
    helperString: "Enter your search"
  };

  handleChange = (value, name) => {
    this.setState({ [name]: value });
  };

  handleValidation = value => {
    if (value.length === 12) {
      return true;
    }
    return false;
  };

  handleSubmit = () => {
    console.log("submitted");
  };

  handleHelper = value => {
    const len = value.length || 0;
    const number = 12 - len;
    let helperString = `You have ${number} more to fill in`;
    if (number === 0) {
      helperString = `You are done, Thank you`;
    } else if (number < 0) {
      helperString = `Exceeded the number of characters`;
    }
    this.setState({ helperString });
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        render={(formControlOnChange, handleValidation, errorHandler) => {
          return (
            <div>
              <Input
                type={"text"}
                name={"userName"}
                placeholder={
                  "enter your serial number - something like: C0XXG00Z0G0H"
                }
                onHelperChange={this.handleHelper}
                onValidate={this.handleValidation}
                onChange={formControlOnChange}
              />
              <span>{this.state.helperString}</span>
            </div>
          );
        }}
      />
    );
  }
}

export default SearchBar;
