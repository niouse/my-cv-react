import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grid-styled'
import Container from './../components/container.component.js'
import ScrollTop from './../components/scroll-top/scroll-top.component.js'
import nodejs from "./../images/nodejs.png"
import {CenterBox, PhotoContainer, ImageContainer, Image, H2, H3, Name, P} from "./banner.styles"

const Banner = ({
  infos,
  title,
  texts
}) => {
  return (
    <Container id="banner">
      <CenterBox>
        <PhotoContainer />
        <ImageContainer>
          <Image id="diamond" src={nodejs} alt="#" />
        </ImageContainer>
        <Box>
          <H2>{texts.beforeName}
            <Name>{infos.firstName + " " + infos.lastName}</Name>
          </H2>
          <H3>{title}</H3>
          <P>{infos.presentation}</P>
        </Box>
      </CenterBox>
      <ScrollTop />
    </Container>
  )
}

Banner.propTypes = {
  infos: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    presentation: PropTypes.string.isRequired
  }),
  title: PropTypes.string,
  texts: PropTypes.shape({
    beforeName: PropTypes.string.isRequired
  })
}
export default Banner