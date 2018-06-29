import React from 'react'
import PropTypes from 'prop-types'

import { Box, Flex } from 'grid-styled'
import styled from 'styled-components';

import linkedin from "./../images/in.png"
import twitter from "./../images/twt.png"
import facebook from "./../images/fb.png"

import Container from './../components/container.component.js'
import LineTitle from "./../components/line-title.component.js"

const CenterBox = styled(Flex)`
  flex-direction : ${({ theme }) => theme.device === "pc" ? "row" : "column"};
`

const InfosBox = styled(Flex)`
  width : ${({ theme }) => theme.device === "pc" ? "50%" : "90%"};
  padding : 10px;
  align-items : center;
  flex-direction : column;
  text-align : ${({ theme }) => theme.device === "pc" ? "left" : "center"};
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

const P = styled.p`
    color: #B5A9B7;
    width: 80%;
    line-height: 2em;
`

const Form = styled.form`
  width : ${({ theme }) => theme.device === "pc" ? "50%" : "100%"};
  flex-direction : column;
  align-items : ${({ theme }) => theme.device === "pc" ? "flex-end" : "center"};
`

const Input = styled.input`
   background: #170F12;
    width : 100%;
    color: #B5A9B7;
    padding: 1em 0.8em;
    margin-bottom: 1em;
    outline: none;
    border: solid 1.5px;
    border-color: #9A9A9A;
  `

const Textarea = Input.withComponent('textarea')

const Button = styled.input`
     text-align: center;
    float: right;
    color: #D2D1D1;
    font-size: 1.2em;
    outline: none;
    padding: 0.6em 1.5em;
    border: 1px solid #B8ABAB;
    background: none;
    width: 120px;
  `

const Contact = ({
  handleFromChange,
  submitForm,
  form
}) => {
  return (
    <Container id="contact" >
      <LineTitle title="CONTACT" />
      <CenterBox>
        <InfosBox>
          <Box width="80%">
            <Link href="/#"><img src={linkedin} alt="linkedin" /></Link>
            <Link href="/#"><img src={twitter} alt="twitter" /></Link>
            <Link href="/#"><img src={facebook} alt="facebook" /></Link>
          </Box>
          <P>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
         quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
         id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
         Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
                  ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.
          </P>
        </InfosBox>
        <FormBox>
          <Form onSubmit={submitForm}>
            <Input
              type="text"
              placeholder="your name"
              value={form.name}
              onChange={(e) => handleFromChange(e, 'name')} />
            <Input
              type="text"
              placeholder="your mail"
              value={form.email}
              onChange={(e) => handleFromChange(e, 'email')} />
            <Textarea
              rows="5"
              cols="70"
              placeholder="your mesage"
              onChange={(e) => handleFromChange(e, 'message')}
              value={form.message} />
            <Button
              type="submit"
              value="SEND" />
          </Form>
        </FormBox>
      </CenterBox>
    </Container>
  )
}


Contact.propTypes = {
  handleFromChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  form : PropTypes.object.isRequired,
}

export default Contact