import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grid-styled'
import styled from 'styled-components';
import LineTitle from "./../components/line-title.component.js"

import {Container, Title} from './../components/styled-components'
import ScrollTop from './../components/scroll-top/scroll-top.component.js'



const Dates = Title.extend`
  letter-spacing : 8px;
`


const Formations = ({ formations, texts }) => {
  return (
    <Container id="formations">
      <LineTitle title={texts.title} />
      <Box m="auto">
        {
          formations.map((item, index) => {
            return (
              <Box key={"formation" + index} pb="80px">
                <Dates>{item.startDate + '-' + item.endDate}</Dates>
                <Title>{item.title}</Title>
                <Title>{item.schoolName + ' - ' + item.location}</Title>
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