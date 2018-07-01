import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { getTheme } from '../api/theme-utils';


const Container = styled.div`
  padding : 70px 0px 70px 0px;
  display : flex;
  align-items : center;
  width : 100%;
  max-width : 700px;
`

const Line = styled.div`
  border-top : 1px solid;
  border-top-color : ${getTheme('text3')};
  flex : 1;
  height : 0px;
`

const Title = styled.div`
  font-weight : 100;
  color :  ${getTheme('text3')};
  font-family : Lato, sans-serif;
  line-height : 33px;
  box-sizing : border-box;
  font-size : 30px;
  margin : 0px 10px 0px 10px;
`

const LineTitle = ({ title }) => {
  return (
    <Container>
      <Line />
      <Title>
        {title}
      </Title>
      <Line />
    </Container>
  )
}

LineTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default LineTitle