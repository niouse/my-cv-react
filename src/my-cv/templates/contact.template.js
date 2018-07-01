import React from 'react'
import PropTypes from 'prop-types'

import { Box, Flex } from 'grid-styled'
import styled from 'styled-components';

import linkedin from "./../images/in.png"
import twitter from "./../images/twt.png"
import facebook from "./../images/fb.png"

import { Container, P } from './../components/styled-components'
import LineTitle from "./../components/line-title.component.js"
import ContactForm from './../components/contact-form.component'
import { isPc } from '../api/theme-utils';

const CenterBox = styled(Flex)`
  flex-direction : ${isPc('row', 'column')};
`

const InfosBox = styled(Flex)`
  width : ${isPc('50%', '90%')};
  padding : 10px;
  align-items : center;
  flex-direction : column;
  text-align : ${isPc('left', 'center')};
  margin : auto;
`

const FormBox = InfosBox.extend`
  width : 50%;
  justify-content : center;
  flex-direction : row;
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
}) => {
  return (
    <Container id="contact" >
      <LineTitle title={texts.title} />
      <CenterBox>
        <InfosBox>
          <Box width="80%">
            <Link href="/#"><img src={linkedin} alt="linkedin" /></Link>
            <Link href="/#"><img src={twitter} alt="twitter" /></Link>
            <Link href="/#"><img src={facebook} alt="facebook" /></Link>
          </Box>
          <Message>
            {texts.contactMessage}
          </Message>
        </InfosBox>
        <FormBox>
          <ContactForm
            texts={texts}
            submiForm={submitForm}
          />
        </FormBox>
      </CenterBox>
    </Container>
  )
}

Contact.propTypes = {
  submitForm: PropTypes.func.isRequired,
  texts: PropTypes.shape({
    contactMessage: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
  }).isRequired
}

export default Contact