import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { getTheme, isPc } from '../api/theme-utils';


const Form = styled.form`
  width : ${isPc('50%', '100%')};
  flex-direction : column;
  align-items : ${isPc('fle-end', 'center')};
`

const Input = styled.input`
   background: ${getTheme('bg4')};
    width : 100%;
    color: ${getTheme('text3')};
    padding: 1em 0.8em;
    margin-bottom: 1em;
    outline: none;
    border: solid 1.5px;
    border-color:  ${getTheme('border')};
  `

const Textarea = Input.withComponent('textarea')

const Button = styled.input`
    text-align: center;
    float: right;
    color: ${getTheme('text3')};
    font-size: 1.2em;
    outline: none;
    padding: 0.6em 1.5em;
    border: solid 1.5px;
    border-color:  ${getTheme('border')};
    background: none;
    min-width: 120px;
    cursor : pointer;
  `

class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      name: "",
      message: ""
    }
  }


  handleFormChange = (e, key) => {
    this.setState({ [key]: e.currentTarget.value })
  }

  submitForm = () => {
    if (this.props.submitForm && typeof (this.props.submitForm === "function")) {
      this.props.submitForm({ ...this.state })
    }
    else alert('no submit function has been passed to contact form')
  }

  render() {
    const { texts } = this.props
    return (
      <Form onSubmit={this.submitForm}>
        <Input
          type="text"
          placeholder={texts.name}
          value={this.state.name}
          onChange={(e) => this.handleFormChange(e, 'name')} />
        <Input
          type="text"
          placeholder={texts.email}
          value={this.state.email}
          onChange={(e) => this.handleFormChange(e, 'email')} />
        <Textarea
          rows="5"
          cols="70"
          placeholder={texts.message}
          onChange={(e) => this.handleFormChange(e, 'message')}
          value={this.state.message} />
        <Button
          type="submit"
          value={texts.submit} />
      </Form>
    );
  }
}

ContactForm.propTypes = {
  submitForm: PropTypes.func,
  texts: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.email,
    message: PropTypes.message,
    submit: PropTypes.string,
  })
};

ContactForm.defaultProps = {
  name: "enter your name",
  email: "enter your email",
  message: "enter your message",
  submit: "SEND",
}

export default ContactForm;