import React ,{Fragment} from 'react';
import PropTypes from 'prop-types'

import styled from 'styled-components';

import Navigation from './navigation.template'
import Banner from './banner.template'
import Experiences from "./experiences.template"
import Contact from "./contact.template"
import Skills from "./skills.template"
import Formations from "./formations.template.js"

import banner from "./../images/banner.jpg"
import contact from "./../images/footerbg.jpg"


const Header = styled.header`
  display : flex;
  flex-direction : column;
  background : url(${banner});
  min-height : 700px;
  width : 100%;
  background-size : cover;
`

const Section= styled.section`
  width : 100%;
  background-color : ${({primary})=>primary ? '#281D24' : 'white'};
`

const Footer = styled.footer`
  background : url(${contact});
  min-height : 567px;
  width : 100%;
  background-size : 100%;  
`

const Template = (props) => {
  const {texts, cv} = props
  return (
    <Fragment>
      <Header>
        <Navigation {...props} />
        <Banner
          {...props}
          infos={cv.personalInfos}
          title={cv.title}
          texts={texts.banner}
        />
      </Header>
      <Section primary>
        <Experiences
          {...props}
          experiences={cv.experiences}
          texts={texts.experiences}
        />
      </Section>
      <Section>
        <Skills
          skills={cv.skills}
          texts={texts.styles}
        />
      </Section>
      <Section primary>
        <Formations
          {...props}
          formations={cv.formations}
          texts={texts.formations}
        />
      </Section>
      <Footer>
        <Contact
          {...props}
          texts={texts.contact}
        />
      </Footer>
    </Fragment>
  );
}

Template.propTypes = {
  cv : PropTypes.object.isRequired,
  texts :PropTypes.object.isRequired
}

export default Template;
