import React, { Component } from 'react'
import PropTypes from 'prop-types'

import up from './up.png'
import styled from 'styled-components';


const Container = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  height : 150px;
  width : 100%;
`

const ArrowUp = styled.div`
  background : url(${up});
  width : 48px;
  height : 48px;
  cursor : pointer;
  margin : 0px 5px 0px 5px;
`

const ArrowDown = ArrowUp.extend`
  transform : rotate(180deg);
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

  scrollNextUp = () => {
    const targetId = this.props.navItems[this.props.index - 1].link
    const target = document.getElementById(targetId)
    this.scrollTo(target)
  }

  scrollNextDown = () => {
    const targetId = this.props.navItems[this.props.index + 1].link
    const target = document.getElementById(targetId)
    this.scrollTo(target)
  }

  scrollTo = (el) => {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': el.offsetTop
    })
  }

  render() {
    return (
      <Container>
        {this.props.index !== 0 && <ArrowUp onClick={this.scrollNextUp} />}
        {this.props.index !== 4 && <ArrowDown onClick={this.scrollNextDown} />}
      </Container>
    )
  }
}

ScrollTop.propTypes  = {
  navItems : PropTypes.array.isRequired,
  index : PropTypes.number.isRequired,
}


export default ScrollTop