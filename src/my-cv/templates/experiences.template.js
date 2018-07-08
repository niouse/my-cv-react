import React from 'react'
import PropTypes from 'prop-types'

import ExperienceDetail from "./experience-detail.template.js"

import { Container, CenterAll, Text, Date, Title2 } from './../components/styled-components'


const ExpContainer = CenterAll.extend`
  flex-direction : column;
  padding : 20px 0px 35px 0px;
  margin : 10px 0px;
  width : 100%;
  height : 150px;
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
    <Container>
      {
        experiences.map((item, index) => {
          return (
            <ExpContainer
              key={"experience" + index}
              onClick={() => openDetails(index)}
              hoverColor={hoverColor}>
              <Date>{item.startDate} - {item.endDate}</Date>
              <Title2>{item.title}</Title2>
              <Text>{item.description}</Text>
            </ExpContainer>
          )
        })
      }
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
  hoverColor: PropTypes.string
}

export default Experiences;

