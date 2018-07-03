import React, { Component } from 'react'
import up from "./up.png"
import styled from 'styled-components';

const Container = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  height : 150px;
  width : 100%;
`

const Arrow = styled.div`
  background : url(${up});
  width : 48px;
  height : 48px;
  cursor : pointer;
`

class ScrollTop extends Component {

  scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': 0
    })
  }

  render() {
    return (
      <Container>
        <Arrow onClick={this.scrollTop} />
      </Container>
    )
  }
}


export default ScrollTop