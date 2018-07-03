import React from 'react'
import PropTypes from 'prop-types'

import ExperienceDetail from "./experience-detail.template.js"

import { Container, CenterAll, P, H3 } from './../components/styled-components'
import LineTitle from "./../components/line-title.component.js"
import ScrollTop from './../components/scroll-top/scroll-top.component.js'


const ExpContainer = CenterAll.extend`
  flex-direction : column;
  padding : 20px 0px 35px 0px;
  margin : 10px 0px;
  width : 100%;
  height : 200px;
  border-radius : 200px;
  cursor : pointer;
  &:hover {
    background-color : ${props => props.hoverColor};
  };
`

const Experiences = (props) => {
  const {
    experiences,
    openDetails,
    detailIndex,
    hoverColor = 'black',
  } = props
  return (
    <Container id="experiences" backgroundColor="#281D24" color="white">
      <LineTitle title="EXPERIENCES" />
      {
        experiences.map((item, index) => {
          return (
            <ExpContainer
              key={"experience" + index}
              onClick={() => openDetails(index)}
              hoverColor={hoverColor}>
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
  detailIndex: PropTypes.number.isRequired,
  hoverColor : PropTypes.string
}

export default Experiences;

