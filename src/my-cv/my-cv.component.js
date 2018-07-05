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

import withData from './api/with-data'
import withTheme from './api/with-theme'

const Header = styled.header`
  display : flex;
  flex-direction : column;
  min-height : 700px;
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
  constructor() {
    super()
    this.state = {
      isDetailOpen: false,
      detailIndex: 0,
    }
  }

  componentDidMount() {
    this.callApi()
      .then(res => alert(res.title))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/test');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };


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
    const { setLanguage, navItems, cv, texts, theme } = this.props
    return (
      <Fragment>
        <Header>
          <Navigation
            setLanguage={setLanguage}
            navItems={navItems}
            bgColor={theme.nav}
            textColor={theme.text3} />
          <Banner
            infos={cv.personalInfos}
            title={cv.title}
            texts={texts.banner}
            image={nodejsImg}
            bg={bannerImg}
          />
        </Header>
        <Section primary>
          <Experiences
            experiences={cv.experiences}
            texts={texts.experiences}
            openDetails={this.openDetails}
            closeDetails={this.closeDetails}
            isDetailOpen={this.state.isDetailOpen}
            detailIndex={this.state.detailIndex}
          />
        </Section>
        <Section>
          <Skills
            skills={cv.skills}
            texts={texts.skills}
          />
        </Section>
        <Section primary>
          <Formations
            formations={cv.formations}
            texts={texts.formations}
          />
        </Section>
        <Footer>
          <Contact
            texts={texts.contact}
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
  navItems: PropTypes.array.isRequired,
  setLanguage: PropTypes.func,
  theme: PropTypes.object.isRequired
}


const WithTheme = withTheme()(App)
const WithData = withData()(WithTheme)

export default WithData


