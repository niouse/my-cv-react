import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components'
import Template from "./templates"


import computeOptions from "./api/compute-options.js"
import scrollTo from "./api/scroll-to.js"
import withData from './api/with-data'

class App extends Component {
  constructor({ defaultLanguage = "en" }) {
    super()
    this.state = {
      stylesOpt: computeOptions(),
      isDetailOpen: false,
      detailIndex: 0,
      form: {
        email: "",
        name: "",
        message: ""
      },
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.computeStyles)
  }

  computeStyles = () => {
    this.setState({
      stylesOpt: computeOptions()
    })
  }

  openDetails = (index) => {
    this.setState({
      isDetailOpen: true,
      detailIndex: index,
    })
  }

  closeDetails = () => {
    this.setState({
      isDetailOpen: false
    })
  }

  handleFromChange = (e, key) => {
    this.setState({
      form: { ...this.state.form, [key]: e.currentTarget.value }
    })
  }

  submitForm = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <ThemeProvider theme={this.state.stylesOpt}>
        <Template
          {...this.props}
          {...this.state}
          stylesOpt={this.state.stylesOpt}
          openDetails={this.openDetails}
          closeDetails={this.closeDetails}
          scrollTo={scrollTo}
          handleFromChange={this.handleFromChange}
          submitForm={this.submitForm}
        />
      </ThemeProvider>
    );
  }
}

export default withData()(App);


