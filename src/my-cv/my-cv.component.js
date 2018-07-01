import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';


import Banner from './templates/banner.template'
import Experiences from "./templates/experiences.template"
import Contact from "./templates/contact.template"
import Skills from "./templates/skills.template"
import Formations from "./templates/formations.template.js"

import Navigation from './components/navigation.component'

import banner from "./images/banner.jpg"
import contact from "./images/footerbg.jpg"
import { isPrim } from './api/theme-utils';

import scrollTo from "./api/scroll-to.js"
import withData from './api/with-data'
import withTheme from './api/with-theme'

const Header = styled.header`
  display : flex;
  flex-direction : column;
  background : url(${banner});
  min-height : 700px;
  width : 100%;
  background-size : cover;
`

const Section = styled.section`
  width : 100%;
  background-color : ${isPrim('bg2', 'bg')};
`

const Footer = styled.footer`
  background : url(${contact});
  min-height : 567px;
  width : 100%;
  background-size : 100%;  
`

class App extends Component {
  constructor({ defaultLanguage = "en" }) {
    super()
    this.state = {
      isDetailOpen: false,
      detailIndex: 0,
    }
  }

  componentDidMount() { }

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
    return (
      <Fragment>
        <Header>
          <Navigation
            scrollTo={scrollTo}
            setLanguage={this.props.setLanguage}
            navItems={this.props.navItems}
            bgColor={this.props.theme.nav} 
            textColor={this.props.theme.text3}/>
          <Banner
            infos={this.props.cv.personalInfos}
            title={this.props.cv.title}
            texts={this.props.texts.banner}
          />
        </Header>
        <Section primary>
          <Experiences
            experiences={this.props.cv.experiences}
            texts={this.props.texts.experiences}
            openDetails={this.openDetails}
            closeDetails={this.closeDetails}
            isDetailOpen={this.state.isDetailOpen}
            detailIndex={this.state.detailIndex}
          />
        </Section>
        <Section>
          <Skills
            skills={this.props.cv.skills}
            texts={this.props.texts.skills}
          />  
        </Section>
        <Section primary>
          <Formations
            formations={this.props.cv.formations}
            texts={this.props.texts.formations}
          />
        </Section>
        <Footer>
          <Contact
            texts={this.props.texts.contact}
            submitForm={this.submitForm}
          />
        </Footer>
      </Fragment>
    );
  }
}

App.propTypes = {
  cv: PropTypes.object.isRequired,
  texts: PropTypes.object.isRequired,
  naItems : PropTypes.array.isRequired,
  setLanguage :PropTypes.func,
}


App = withTheme()(App)
App = withData()(App)

export default App


