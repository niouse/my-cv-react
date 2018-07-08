import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grid-styled'

import {Container, Title} from './../components/styled-components'

import {Date} from './../components/styled-components'

const Formations = ({ formations, texts }) => {
  return (
    <Container>
      <Box m="auto" width="100%">
        {
          formations.map((item, index) => {
            return (
              <Box key={"formation" + index} pb="80px">
                <Date>{item.startDate + '-' + item.endDate}</Date>
                <Title>{item.title}</Title>
                <Title>{item.schoolName + ' - ' + item.location}</Title>
              </Box>
            )
          })
        }
      </Box>
    </Container>
  )
}

Formations.propTypes = {
  formations: PropTypes.arrayOf(PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    schoolName: PropTypes.string.isRequired
  })).isRequired,
  texts : PropTypes.shape({
    title : PropTypes.string.isRequired
  }).isRequired

}

export default Formations