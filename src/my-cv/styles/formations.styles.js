import {container} from "./classes"

const styles = {
  container : {
    ...container
  },
  content : {
    width : "100%",
    margin : "auto",
  },
  row : {
    width : "100%",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    paddingBottom : "80px",
  },
  dates : {
    fontSize :"1.5em",
    fontWeight : 900,
    letterSpacing : "10px",
    color : "white",
    paddingBottom : "10px",
    textAlign : "center",
    width : "100%",
  },
  title : {
    fontSize :"1.2em",
    fontWeight : 300,
    flex : 1,
    color : "white",
    paddingBottom : "10px",
    textAlign : "center",
    width : "100%",
  },
  schoolName : {
    fontSize :"1.5em",
    fontWeight : 900,
    letterSpacing : "1px",
    color : "white",
    textAlign : "center",
    width : "100%",
  },
  location : {
    fontSize :"1.5em",
    fontWeight : 900,
    letterSpacing : "1px",
    color : "white",
  }
}

export default styles