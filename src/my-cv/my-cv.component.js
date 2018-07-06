import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import nodejsImg from "./images/nodejs.png";
import bannerImg from "./images/banner.jpg";

import Banner from './templates/banner.template'
import Experiences from "./templates/experiences.template"
import Contact from "./templates/contact.template"
import Skills from "./templates/skills.template"
import Formations from "./templates/formations.template.js"

import Navigation from './components/navigation.component'

import contact from "./images/footerbg.jpg"
import { isPrim } from './api/theme-utils';

import withData from './services/with-data'
import withTheme from './services/with-theme'
import { Wrapper } from './components/styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';


const Header = styled.header`
  display : flex;
  flex-direction : column;
  min-height : 700px;
`

const Section = Wrapper.extend`
  width : 100%;
`

const Footer = styled.footer`
  background : url(${contact});
  min-height : 567px;
  width : 100%;
  background-size : 100%;  
`

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
        <Header>
          <Navigation
            setLanguage={setLanguage}
            navItems={navItems}
            bgColor={theme.nav}
            textColor={theme.text3} />
          {
            infos ?
              <Banner
                infos={infos}
                title={infos.title}
                texts={texts.banner}
                image={nodejsImg}
                bg={bannerImg}
              /> :
              <CircularProgress />
          }
        </Header>
        <Section primary>
          {experiences ?
            <Experiences
              experiences={experiences}
              texts={texts.experiences}
              openDetails={this.openDetails}
              closeDetails={this.closeDetails}
              isDetailOpen={this.state.isDetailOpen}
              detailIndex={this.state.detailIndex}
            /> :
            <CircularProgress />}
        </Section>
        <Section>
          {skills ?
            <Skills
              skills={skills}
              texts={texts.skills}
            /> :
            <CircularProgress />}
        </Section>
        <Section primary>
          {formations ?
            <Formations
              formations={formations}
              texts={texts.formations}
            /> :
            <CircularProgress />
          }
        </Section>
        <Footer>
          {infos ?
            <Contact
              texts={texts.contact}
              submitForm={this.submitForm}
            /> :
            <CircularProgress />}
        </Footer>
      </Fragment>
    );
  }
}

App.propTypes = {
  infos : PropTypes.object,
  experiences : PropTypes.array,
  formations : PropTypes.array,
  skills : PropTypes.array,
  texts: PropTypes.object.isRequired,
  navItems: PropTypes.array.isRequired,
  setLanguage: PropTypes.func,
  theme: PropTypes.object.isRequired
}


const WithTheme = withTheme()(App)
const WithData = withData()(WithTheme)

export default WithData


