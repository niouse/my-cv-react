import React from 'react'
import up from "./up.png"

const styles = {
  container : {
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    height : "150px"
  },
  arrow : {
    background: `url(${up})`,
    width: "48px",
    height : "48px",
    cursor : "pointer",
  },
}


const ScrollTop = (props)=>{
  return (
    <div style={styles.container}>
       <div style={styles.arrow}  onClick={(e)=>{e.preventDefault();window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': 0
      })}}> </div>
    </div>
  )
}

export default ScrollTop