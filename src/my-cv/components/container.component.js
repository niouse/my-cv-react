import React from 'react'


const Container = (props) => {
  
  const styles = {
    margin : "0 auto 0 auto",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    flex : 1,
    maxWidth : "1080px",
    backgroundColor : props.backgroundColor || "none",
    color : props.color || "white",
}
  
  return  <div style={styles}
      id={props.id || "center-box"}>
        {props.children}
    </div>
}
    


export default Container