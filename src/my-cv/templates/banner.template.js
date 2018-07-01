import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grid-styled'

import ScrollTop from './../components/scroll-top/scroll-top.component.js'
import nodejs from "./../images/nodejs.png"

import styled from 'styled-components';
import { Container, CenterAll, H2, H3, P } from './../components/styled-components'
import { getTheme, isPc } from '../api/theme-utils';


const CenterBox = CenterAll.extend`
  flex-direction : ${isPc('row', 'column')};
  flex : 1;
  max-width : 800px;
  margin : auto;
`

const NameBox = H3.extend`
  text-align : ${isPc('left', 'center')};
  color:${getTheme('text3')};
  line-height: 1.1;
`

const ImageBox = CenterAll.extend`
  width : ${isPc('500px', '250px')};
  height : 250px;
`

const Image = styled.img`
  height : 120px;
`

const Name = styled.strong`
  color:${({ theme }) => theme.text2};
  font-size : 2em;
  padding-left : 10px;
`

const Title = H2.extend`
  text-align : ${isPc('left', 'center')};
`

const Banner = ({
  infos,
  title,
  texts
}) => {
  return (
    <Container id="banner">
      <CenterBox>
        <ImageBox>
          <Image id="diamond" src={nodejs} alt="#" />
        </ImageBox>
        <Box>
          <NameBox>
            {texts.beforeName}
            <Name>
              {infos.firstName + " " + infos.lastName}
            </Name>
          </NameBox>
          <Title>{title}</Title>
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