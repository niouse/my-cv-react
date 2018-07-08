import React from 'react'
import PropTypes from 'prop-types'

import LineTitle from './line-title.component';
import NavButtons from './scroll-top/nav-buttons.component';
import styled from 'styled-components';
import { getBgColor } from '../api/theme-utils';


const Container = styled.section.attrs({
  id: props => props.id
})`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  background-color : ${getBgColor};
  background-image: ${props => props.bg ? `url(${props.bg})` : "none"};
  background-size: cover;
  width : ${({ theme }) => (theme['screen-width'] + 'px')};
  height : ${({ theme }) => (theme['screen-height'] + 'px')};
  overflow : hidden;
`

Container.defaultProps = {
  theme: {
    'screen-width': "100%",
    'screen-height': "100%"
  }
}


const Screen = ({
  index,
  navItems,
  title,
  noNav,
  bg,
  children,
  primary = false,
  secondary = false,
  tertiary = false }) => {
  return <Container
    bg={bg || false}
    primary={primary}
    secondary={secondary}
    tertiary={tertiary}
    id={navItems[index].link}>
    {title && <LineTitle title={title} />}
    {children}
    {!noNav && <NavButtons index={index} navItems={navItems} />}
  </Container>
}

Screen.propTypes = {
  index: PropTypes.number.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
  })).isRequired,
  title: PropTypes.string,
  noNav: PropTypes.bool,
  children: PropTypes.any,
  bg : PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool
}

export default Screen