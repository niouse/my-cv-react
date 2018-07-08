import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

    constructor({ defaultLanguage }) {
      super()
      this.state = {
        cv: cv[defaultLanguage],
        navItems: navItems['fr'],
        texts: texts[defaultLanguage],
        lng: defaultLanguage,
        infos: false,
        experiences: false,
        skills: false,
        formations: false,
      }
    }

    componentDidMount() {
      //this.populate(this.state.lng)
    }

    populate = (lng) => {
      this.fetchData(lng)
        .then(res => {
          for (let key in res) {
            this.setState({ [key]: res[key] })
          }
        })
        .catch(err => alert(err));
    }

    fetchData = async (lng) => {
      const requests = {
        infos: await fetch(`/cv/infos/`),
        experiences: await fetch(`/cv/experiences/${lng}`),
        formations: await fetch(`/cv/formations/${lng}`),
        skills: await fetch(`/cv/skills/${lng}`),
        contact: await fetch(`/cv/contact/${lng}`),
      }

      const results = {
        infos: await requests.infos.json(),
        experiences: await requests.experiences.json(),
        formations: await requests.formations.json(),
        skills: await requests.skills.json(),
        contact: await requests.contact.json(),
      }
      for (let key in requests) {
        if (requests[key].status !== 200 && requests[key].status !== 304) {
          throw Error(requests[key].message)
        }
      }
      return results
    };

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
        experiences={this.state.experiences}
        infos={this.state.infos}
        formations={this.state.formations}
        skills={this.state.skills}
        navItems={this.state.navItems}
        setLanguage={this.setLanguage}
        texts={this.state.texts} />
    }
  }

  Result.propType = {
    defaultLanguage: PropTypes.string,
  }

  Result.defaultProps = {
    defaultLanguage: "fr"
  }

  return Result
}



export default withData