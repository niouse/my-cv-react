import React from 'react'
import PropTypes from 'prop-types'

import ExperienceDetail from "./experience-detail.template.js"

import { Container, CenterAll, P, H3 } from './../components/styled-components'
import LineTitle from "./../components/line-title.component.js"
import ScrollTop from './../components/scroll-top/scroll-top.component.js'


const ExpContainer = CenterAll.extend`
  cursor : pointer;
  padding : 20px 0px 35px 0px;
  margin : 10px 0px;
  width : 100%;
  height : 200px;
  flex-direction : column;
  border-radius : 200px;
  &:hover {
    background-color : rgba(0,0,0,0.5);
  };
`

const Experiences = (props) => {
  const {
    experiences,
    openDetails,
    detailIndex,
  } = props
  return (
    <Container id="experiences" backgroundColor="#281D24" color="white">
      <LineTitle title="EXPERIENCES" />
      {
        experiences.map((item, index) => {
          return (
            <ExpContainer
              key={"experience" + index}
              onClick={() => openDetails(index)}>
              <P>{item.startDate} - {item.endDate}</P>
              <H3>{item.title}</H3>
              <P>{item.description}</P>
              {item.society && <P>{item.society.name}</P>}
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

Experiences.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    society: PropTypes.object
  })).isRequired,
  openDetails: PropTypes.func.isRequired,
  detailIndex: PropTypes.number.isRequired
}

export default Experiences;

