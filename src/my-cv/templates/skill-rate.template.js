import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'grid-styled'
import styled from 'styled-components';

const Container = styled(Flex)`
  align-items : center;
  justify-content : space-between;
  height :70px;
  width : 320px;
`

const Name = styled.span`
  font-size : 1.5em;
  color : #281D24;
`

const Circle = styled.div`
  width : 32px;
  height : 32px;
  border-radius : 16px;
  margin-left : 10px;
  background-color : ${({primary}) => primary ? '#C6C3C5' : '#281D24'};
`

const SkillRate = ({name, rate})=>{
  var rateArray = new Array(5).fill(false)
  return (
    <Container>
      <Name>{name}</Name> 
      <Flex>
        {
           rateArray
             .map((item, index)=>index+1>rate)
             .map((isPrim, index)=><Circle key={"circle"+index} primary={isPrim} />)
        }
      </Flex>
    </Container>
  )
}

SkillRate.propTypes = {
  name : PropTypes.string.isRequired,
  rate : PropTypes.number.isRequired,
}

export default SkillRate