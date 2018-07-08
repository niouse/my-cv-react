import React from 'react'
import PropTypes from 'prop-types'

import { Box, Flex } from 'grid-styled'
import styled from 'styled-components';

import linkedin from "./../images/in.png"
import twitter from "./../images/twt.png"
import facebook from "./../images/fb.png"

import { Container, P, CenterAll } from './../components/styled-components'
import ContactForm from './../components/contact-form.component'
import { isPc } from '../api/theme-utils';


const CenterBox = styled(CenterAll)`
  flex-direction : ${isPc('row', 'column')};
`

const LeftBox = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  width : 50%;
  padding : 10px;
  margin : auto;
`

const RightBox = LeftBox.extend`
  text-align : ${isPc('left', 'center')};
  width : ${isPc('50%', '90%')};
`

const Link = styled.a`
  padding : 0px 5px 0px 5px;
`

const Message = P.extend`
  width: 80%;
  line-height: 2em;
`

const Contact = ({
  submitForm,
  texts,
  bg
}) => {
  return (
    <Container>
      <CenterBox>
        <RightBox>
          <Box width="80%">
            <Link href="/#"><img src={linkedin} alt="linkedin" /></Link>
            <Link href="/#"><img src={twitter} alt="twitter" /></Link>
            <Link href="/#"><img src={facebook} alt="facebook" /></Link>
          </Box>
          <Message>
            {texts.contactMessage}
          </Message>
        </RightBox>
        <LeftBox>
          <ContactForm
            texts={texts}
            submiForm={submitForm}
          />
        </LeftBox>
      </CenterBox>
    </Container>
  )
}

Contact.propTypes = {
  submitForm: PropTypes.func.isRequired,
  texts: PropTypes.shape({
    contactMessage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  bg : PropTypes.string,
}

export default Contact