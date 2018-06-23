import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cv from './data/cv.js'
import navItems from './data/nav-items.js'

import Template from "./templates"
import styles from './styles'
import texts from './texts'
import themes from './themes'

import computeOptions from "./api/compute-options.js"
import scrollTo from "./api/scroll-to.js"

class App extends Component {
  
  constructor({defaultLanguage="en"}){
    super()
    this.state={
      styles : styles(computeOptions(), {}),
      isDetailOpen : false,
      expDetails : cv[defaultLanguage].experiences[0],
      cv : cv[defaultLanguage],
      navItems : navItems[defaultLanguage],
      form : {
        email : "your name",
        name : "your email",
        message : "your message"
      },
      texts : texts[defaultLanguage],
      theme : {}
    }
  }
  
  componentDidMount(){
    window.addEventListener('resize', this.computeStyles)
  }
  
  toggleBool = (key) => {
    this.setState({
      [key]:!this.state[key],
    })
  }
  
  openDetails = (index) => {
    this.toggleBool('isDetailOpen')
    this.setState({
      expDetails : this.state.cv.experiences[index]
    })
  }
  
  setLanguage = (lng) => {
    this.setState({
      cv : cv[lng],
      navItems : navItems[lng],
      texts : texts[lng]
    })
  }
  
  handleFromChange = (e, key) => {
    this.setState({
      form : Object.assign({}, this.state.form, {[key]: e.currentTarget.value})
    })
  }
  
  submitForm = (e) => {
    e.preventDefault()
  }
    
  computeStyles = () => {
    const newStyles = styles(computeOptions(), this.state.theme)
    this.setState({
      styles : newStyles
    })
  }
                             
  
  render() {
    return (
      <Template 
        {...this.state}
        toggleBool={this.toggleBool}
        openDetails={this.openDetails}
        setLanguage={this.setLanguage}
        scrollTo={scrollTo}
        handleFromChange={this.handleFromChange}
        submitForm={this.submitForm}
        />
    );
  }
}



export default App;


