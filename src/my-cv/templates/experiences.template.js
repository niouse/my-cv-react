import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'grid-styled'
import styled from 'styled-components';

import ExperienceDetail from "./experience-detail.template.js"

import Container from './../components/container.component.js'
import LineTitle from "./../components/line-title.component.js"
import ScrollTop from './../components/scroll-top/scroll-top.component.js'


const ExpContainer = styled(Flex).attrs({
  flexDirection : "column",
  alignItems : "center",
  justifyContent : "center",
  p : "20px 0px 35px 0px",
  width : "100%",
})`
cursor : pointer;
&:hover {
  background-color : rgba(0,0,0,0.5);
}
`
const Text = styled.div`
  margin : 0;
  padding : 10px 0px 10px 0px;
  font-size : 18px;
`

const Title = Text.extend`
  line-height : 20px;
  font-weight : 300;
`

const P = styled.p`
    max-width : 400px;
    text-align : center;
    font-style : italic;
    font-size : 14px;
    line-height : 28px;
`


const Experiences = (props) => {
  const {
    experiences,
    openDetails,
    detailIndex,
  }=props
  return (
    <Container id="experiences" backgroundColor="#281D24" color="white">
      <LineTitle title="EXPERIENCES" />
      {
        experiences.map((item, index) => {
          return (
            <ExpContainer
              key={"experience" + index}             
              onClick={() => openDetails(index)} >
              <Text>{item.startDate} - {item.endDate}</Text>
              <Title>{item.title}</Title>
              <P>{item.description}</P>
              {item.society && <div>{item.society.name}</div>}
            </ExpContainer>
          )
        })
      }
      <ScrollTop />
      <ExperienceDetail 
        {...props}
        exp={experiences[detailIndex]}
        />
    </Container>
  )
}

Experiences.propTypes={
  experiences : PropTypes.arrayOf(PropTypes.shape({
    startDate : PropTypes.string.isRequired,
    endDate : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    society : PropTypes.object
  })).isRequired,
  openDetails: PropTypes.func.isRequired,
  detailIndex : PropTypes.number.isRequired
}

export default Experiences;

