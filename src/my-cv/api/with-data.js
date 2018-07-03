import React, { Component } from 'react'
import cvEn from './../data/cv-en.json'
import cvFr from './../data/cv-fr.json'

import navItemsEn from "./../data/nav-items-en.json"
import navItemsFr from "./../data/nav-items-fr.json"

import textsFr from './../data/texts-fr.json'
import textsEn from './../data/texts-en.json'

const navItems = {
  en: navItemsEn,
  fr: navItemsFr
}
const cv = {
  fr: cvFr,
  en: cvEn,
}

const texts = {
  fr: textsFr,
  en: textsEn
}

const withData = () => (Wrapped) => {
  class Result extends Component {
    constructor(props) {
      super()
      this.state = {
        cv: cv["fr"],
        navItems: navItems['fr'],
        texts: texts["fr"]
      }
    }

    setLanguage = (lng) => {
      this.setState({
        cv: cv[lng],
        navItems: navItems[lng],
        texts: texts[lng]
      })
    }

    render() {
      return <Wrapped
        {...this.props}
        cv={this.state.cv}
        navItems={this.state.navItems}
        setLanguage={this.setLanguage}
        texts={this.state.texts} />
    }
  }
  return Result
}

export default withData