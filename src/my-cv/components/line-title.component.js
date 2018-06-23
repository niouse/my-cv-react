import React from 'react'

const styles = {
  container : {
    padding : "70px 0px 70px 0px",
    display : "flex",
    width : "100%",
    maxWidth : "700px",
    alignItems : "center",
  },
  line : {
    borderTop : "1px solid #C6C3C5",
    flex : 1,
    height : "0px",
  },
  headTitle : {
    fontWeight : 100,
    color : '#C6C3C5',
    fontFamily : 'Lato, sans-serif',
    lineHeight : "33px",
    boxSizing : "border-box",
    fontSize : "30px",
    margin : "0px 10px 0px 10px"
  },
}


const LineTitle = ({title}) => {
  return ( 
      <div style={styles.container}>
        <div style={styles.line}></div>
          <h2 style={styles.headTitle}>
             {title}
          </h2>
       <div style={styles.line}></div>
      </div>
  )
}

export default LineTitle