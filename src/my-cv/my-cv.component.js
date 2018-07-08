import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'

import nodejsImg from "./images/nodejs.png";
import bannerImg from "./images/banner.jpg";

import _Banner from './templates/banner.template'
import _Experiences from "./templates/experiences.template"
import _Contact from "./templates/contact.template"
import _Skills from "./templates/skills.template"
import _Formations from "./templates/formations.template.js"

import Navigation from './components/navigation.component'

import contact from "./images/footerbg.jpg"

import withData from './services/with-data'
import withTheme from './services/with-theme'
import Screen from './components/screen.layout'
import waitFor from './components/wait-for';


const Banner = waitFor('infos')(_Banner)
const Experiences = waitFor('experiences')(_Experiences)
const Skills = waitFor('skills')(_Skills)
const Formations = waitFor('formations')(_Formations)
const Contact = waitFor('infos')(_Contact)


class App extends Component {
  constructor() {
    super()
    this.state = {
      isDetailOpen: false,
      detailIndex: 0,
    }
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

  submitForm = (e) => {
    e.preventDefault()
  }

  render() {
    const { setLanguage, navItems, texts, theme, infos, experiences, skills, formations } = this.props
    return (
      <Fragment>
        <Screen id={'about'} index={0}>
          <Navigation
            setLanguage={setLanguage}
            navItems={navItems}
            bgColor={theme.nav}
            textColor={theme.text3} />

          <Banner
            infos={infos}
            texts={texts.banner}
            image={nodejsImg}
            bg={bannerImg}
          />
        </Screen>
        <Screen
          secondary
          id='experiences'
          index={1}
          title={'EXPERIENCES'}>
          <Experiences
            experiences={experiences}
            texts={texts.experiences}
            openDetails={this.openDetails}
            closeDetails={this.closeDetails}
            isDetailOpen={this.state.isDetailOpen}
            detailIndex={this.state.detailIndex}
          />
        </Screen>
        <Screen
          id='skills'
          index={2}
          title="SKILLS">
          <Skills
            skills={skills}
            texts={texts.skills}
          />
        </Screen>
        <Screen
          id='formations'
          index={3}
          secondary
          title="FORMATIONS">
          <Formations
            formations={formations}
            texts={texts.formations}
          />
        </Screen>
        <Screen
          id='contact'
          index={4}
          title={"CONTACT"}>
          <Contact
            bg={contact}
            infos={infos}
            texts={texts.contact}
            submitForm={this.submitForm}
          />
        </Screen>
      </Fragment>
    );
  }
}

App.propTypes = {
  infos: PropTypes.any,
  experiences: PropTypes.any,
  formations: PropTypes.any,
  skills: PropTypes.any,
  texts: PropTypes.object.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({
    text : PropTypes.string.isRequired,
    link : PropTypes.string.isRequired,
  })).isRequired,
  setLanguage: PropTypes.func,
  theme: PropTypes.object.isRequired
}


const WithTheme = withTheme()(App)
const WithData = withData()(WithTheme)

export default WithData


