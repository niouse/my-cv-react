import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display : flex;
  flex : 1;
  justify-content : center;
  align-items :  center;
  width : 100%;
  height : 100%;
`

const Text = styled.p`
  padding : 20px;
  font-size : 1.2em;
  color : grey;
`

const waitFor = (propName) => (Wrapped) => {
  const Result = (props) => <Fragment>
    {
      props[propName] ?
        <Wrapped {...props} /> :
        <Container>
          <CircularProgress />
          <Text>Loading ressources</Text>
        </Container>
    }
  </Fragment>
  return Result
}

export default waitFor