import React from 'react';

interface FormProps {
  className?: string;
  submitButton?: (isDisabled: boolean) => JSX.Element;
  onSubmit?: (data: FormControls) => void;
  render?: (onChange: onChange, initFormControls: (elements: JSX.Element[]) => void) => JSX.Element[];
}

interface FormInputData {
  value: string;
  isValid: boolean;
  isTouched: boolean;
  name: string;
  id: string;
}

type onChange = (inputData: FormInputData) => void;

interface FormState {
  isSubmitDisabled: boolean;
}

type FormControls = {
  [index: string]: FormControl;
};

type FormControl = {
  isValid: boolean;
  isTouched: boolean;
  value?: string;
  name?: string;
};

class Form extends React.Component<FormProps, FormState> {
  private formControls: FormControls;

  constructor(props: FormProps) {
    super(props);

    this.state = {
      isSubmitDisabled: true
    };
  }

  initFormControls = (elements: JSX.Element[]) => {
    if (this.formControls) {
      return;
    }

    this.formControls = {};

    elements.forEach(item => {
      const { id, isTouched, isValid } = item.props;
      this.formControls[id] = {
        isTouched,
        isValid
      };
    });
  };

  isAllInputsValid(inputs: FormControls) {
    const inputKeys = Object.keys(inputs);
    const isValid = inputKeys.every(input => inputs[input].isValid);
    return isValid;
  }

  handleChange = (inputData: FormInputData) => {
    const { value, isValid, isTouched, id, name } = inputData;

    this.formControls = {
      ...this.formControls,
      [id]: {
        name,
        isValid,
        isTouched,
        value
      }
    };

    const isAllInputsValid = this.isAllInputsValid(this.formControls);

    this.isSubmitButtonShouldBeDisabled(isAllInputsValid, this.state.isSubmitDisabled);
  };

  isSubmitButtonShouldBeDisabled(isAllInputsValid: boolean, currentSubmitButtonState: boolean) {
    if (isAllInputsValid && currentSubmitButtonState !== !isAllInputsValid) {
      this.setState({
        isSubmitDisabled: false
      });
    } else if (currentSubmitButtonState !== !isAllInputsValid) {
      this.setState({
        isSubmitDisabled: true
      });
    }
  }

  onSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    this.props.onSubmit && this.props.onSubmit(this.formControls);
  };

  render() {
    return (
      <form className={this.props.className} onSubmit={this.onSubmit}>
        {this.props.render && this.props.render(this.handleChange, this.initFormControls)}
        {this.props.submitButton && this.props.submitButton(this.state.isSubmitDisabled)}
      </form>
    );
  }
}

export default Form;
