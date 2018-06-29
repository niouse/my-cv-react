import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grid-styled'
import styled from 'styled-components';
import LineTitle from "./../components/line-title.component.js"
import Container from './../components/container.component.js'
import ScrollTop from './../components/scroll-top/scroll-top.component.js'

const Text = styled.div`
  font-size : 1.5em;
  font-weight : 900;
  color : white;
  padding-bottom : 10px;
  text-align : center;
  width : 100%;
`

const Dates = Text.extend`
  letter-spacing : 8px;
`

const Title = Text.extend`
  font-size : 1.2em;
  font-weight : 300;
`

const Formations = ({ formations }) => {
  return (
    <Container id="formations">
      <LineTitle title={"FORMATIONS"} />
      <Box m="auto">
        {
          formations.map((item, index) => {
            return (
              <Box key={"formation" + index} pb="80px">
                <Dates>{item.startDate + '-' + item.endDate}</Dates>
                <Title>{item.title}</Title>
                <Text>{item.schoolName + ' - ' + item.location}</Text>
              </Box>
            )
          })
        }
      </Box>
      <ScrollTop />
    </Container>
  )
}

Formations.propTypes = {
  formations: PropTypes.arrayOf(PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    schoolName: PropTypes.string.isRequired
  })).isRequired
}

export default Formations