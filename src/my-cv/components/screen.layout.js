import React from 'react'
import PropTypes from 'prop-types'

import LineTitle from './line-title.component';
import ScrollTop from './scroll-top/scroll-top.component';
import styled from 'styled-components';
import { getBgColor } from '../api/theme-utils';

import navItems from './../data/nav-items-en.json'

const Container = styled.section.attrs({
  id: props => props.id
})`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  background-color : ${getBgColor};
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


const Screen = ({ index, id, title, noNav, children, primary = false, secondary = false, tertiary = false }) => {
  return <Container
    primary={primary}
    secondary={secondary}
    tertiary={tertiary}
    id={id}>
    {title && <LineTitle title={title} />}
    {children}
    {!noNav && <ScrollTop id={id} index={index} navItems={navItems} />}
  </Container>
}

Screen.propTypes = {
  index : PropTypes.number.isRequired,
  id : PropTypes.string.isRequired,
  title: PropTypes.string,
  noNav: PropTypes.bool,
  children: PropTypes.any,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool
}

export default Screen