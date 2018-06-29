import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'grid-styled'
import styled from 'styled-components';

import enFlag from './../images/flags/uk.png'
import frFlag from './../images/flags/fr.png'


const FixedWrapper = styled.div`
  width : 100%;
  position : fixed;
  top : 0;
  background-color : rgba(1,0,1,0.7);
`

const Container = styled(Flex)`
  width : 100%;
  justify-content : space-between;
  align-items : center;
  height : 45px;
  max-width : 1080px;
  margin : auto;
`

const Nav = styled.nav`
  display : ${({ theme }) => theme.device === "pc" ? "flex" : "none"};
  justify-content : flex-end;
  align-items : center;
  font-size : 0.9em;
  color : #B5A9B7;
`

const NavButton = styled.a`
  padding : 0px 8px 0px 8px;
  text-decoration : none;
  color : #C5B7B8;
`

const NavOption = NavButton.withComponent('option')

const Flag = styled.img`
  height : 16px;
  margin-left : 10px;
  cursor : pointer;
`

const Select = styled.select`
  display : ${({ theme }) => theme.device === "pc" ? "none" : "inline"};
  background-color : transparent;
  margin-right : 10px;
  height : 30px;
  color : white;
`

const Navigation = (props) => {
  const {
    navItems,
    setLanguage,
    scrollTo,
  } = props
  return (
    <FixedWrapper>
      <Container>
        <div>
          <Flag
            src={enFlag}
            onClick={() => setLanguage('en')}
            alt="uk flag" />
          <Flag
            src={frFlag}
            onClick={() => setLanguage('fr')}
            alt="fr flag" />
        </div>
        <Nav id="navigation">
          {
            navItems.map((item, index) => {
              return (
                <NavButton
                  href={item.link}
                  key={'navItem' + index}
                  onClick={(e) => scrollTo(e, item.link)}>
                  {item.text}
                </NavButton>
              )
            })
          }
        </Nav>
        <Select onChange={(e) => scrollTo(e, e.currentTarget.value)}>
          {
            navItems.map((item, index) => {
              return (
                <NavOption
                  key={'menuItem' + index}
                  value={item.link}>
                  {item.text}
                </NavOption>
              )
            })
          }
        </Select>
      </Container>
    </FixedWrapper>
  )
}

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  setLanguage: PropTypes.func.isRequired,
  scrollTo: PropTypes.func.isRequired,
}

export default Navigation