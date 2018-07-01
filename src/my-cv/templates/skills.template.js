import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box } from 'grid-styled'
import styled from 'styled-components';

import { Container } from './../components/styled-components'
import LineTitle from "./../components/line-title.component.js"
import ScrollTop from './../components/scroll-top/scroll-top.component.js'
import SkillRate from "./../components/skill-rate.component.js"

import formatSkills from './../api/format-skills'

const AroundBox = styled(Flex)`
  max-width:900px;
  flex-wrap : wrap;
  justify-content : space-around;
`

const SkillBox = styled.div`
  display : inline-block;
  flex-basis : 0;
  flex-shrink : 0;
  flex-grow : 0;
  margin-bottom : 50px;
`

const SkillType = styled.div`
  font-size : 1em;
  color : white;
  font-weight : 900;
  align-items : center;
  display : flex;
  padding : 10px;
  background-color : ${'bg3'};
  justify-content : center;
`

const SkillsContainer = ({ title, skills }) => (
  <SkillBox>
    <SkillType>{title.toUpperCase()}</SkillType>
    <Box pr="15px" pl="15px">
      {skills.map((item, index) => <SkillRate
        key={title + index}
        name={item.name}
        rate={item.rate} />)}
    </Box>
  </SkillBox>
)

const Skills = ({ skills, texts }) => {
  const formatedSkills = formatSkills(skills)
  return (
    <Container id="skills">
      <LineTitle title={texts.title} />
      <AroundBox>
        {
          formatedSkills.map((item, index) => {
            return <SkillsContainer
              key={"skill" + index}
              title={item.type}
              skills={item.skills} />
          })
        }
      </AroundBox>
      <ScrollTop />
    </Container>
  )
}

SkillsContainer.propTypes = {
  skills: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  })).isRequired
}

export default Skills