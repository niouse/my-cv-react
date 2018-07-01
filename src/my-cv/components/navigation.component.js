import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'grid-styled'
import styled from 'styled-components';

import enFlag from './../images/flags/uk.png'
import frFlag from './../images/flags/fr.png'
import { isPc, getTheme } from '../api/theme-utils';


const FixedWrapper = styled.div`
  width : 100%;
  position : fixed;
  top : 0;
  background-color : ${({ bgColor }) => bgColor};
`

const Container = styled.div`
  display : flex;
  width : 100%;
  justify-content : space-between;
  align-items : center;
  height : 45px;
  max-width : 1080px;
  margin : auto;
`

const Nav = styled.nav`
  display : ${isPc('flex', 'none')};
  justify-content : flex-end;
  align-items : center;
  position : relative;
`

const NavButton = styled.a`
  padding : 0px 8px 0px 8px;
  text-decoration : none;
  color : ${({ textColor }) => textColor};
  font-size : 0.7em;
  width : 90px;
  text-align : center;
`

const NavOption = NavButton.withComponent('option')

const Flag = styled.img`
  height : 16px;
  margin-left : 10px;
  cursor : pointer;
`

const Select = styled.select`
  display : ${isPc('none', 'inline')};
  background-color : transparent;
  margin-right : 10px;
  height : 30px;
  color : white;
`

const MovingBox = styled.div`
  position : absolute; 
  left : 100px;
  width : 106px;
  height : 45px;
  background-color : transparent;
  border : 1px solid red;
`

class Navigation extends Component {
  
  scrollTo = (e) => {
    e.preventDefault()
    const el = e.currentTarget
    const link = el.dataset.link
    const target = document.getElementById(link)
    this.props.scrollTo(target)

    const movBox =  document.getElementById('moving-box')
    this.moveTo(movBox, el)
  }

  setLanguage = (e) => this.props.setLanguage(e.currentTarget.dataset.lng)

  moveTo = (fromEl, toEl) => {
    fromEl.style.left = toEl.offsetLeft+'px'
    let left=Number(fromEl.style.left.replace('px', ''))
    console.log(left)
    const diff = Math.abs(left-toEl.offsetLeft)
    console.log(toEl.offsetLeft)
  }

  render() {
    const {
      navItems,
      scrollTo,
      bgColor,
      textColor,
    } = this.props
    return (
      <FixedWrapper bgColor={bgColor}>
        <Container>
          <div>
            <Flag
              src={enFlag}
              data-lng='en'
              onClick={this.setLanguage}
              alt="uk flag" />
            <Flag
              src={frFlag}
              data-lng='fr'
              onClick={this.setLanguage}
              alt="fr flag" />
          </div>
          <Nav id="navigation">
          <MovingBox id="moving-box"/>
            {navItems.map((item, index) => {
              return (
                <NavButton
                  href={item.link}
                  data-link={item.link}
                  key={'navItem' + index}
                  id={'navItem-' + index}
                  textColor={textColor}
                  onClick={this.scrollTo}>
                  {item.text}
                </NavButton>
              )
            })}
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