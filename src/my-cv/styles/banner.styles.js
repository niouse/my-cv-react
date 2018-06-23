
const styles = (opt, theme) => ({
  
  centerBox : {
    display : "flex",
    flexDirection : opt.device === "pc" ? "row" : "column",
    //flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    flex : 1,
    maxWidth : "800px",
    margin : "auto",
    
    //border : "1px solid red"
  },
  mainTitle : {
     textAlign : opt.device === "pc" ? "left" : "center",
     color:"#C5B7B8",
      fontWeight: "bolder",
      fontSize: "30px",
      margin : 0,
      lineHeight: 1.1,
  },
  secondaryTitle : {
      textAlign : opt.device === "pc" ? "left" : "center",
      color:"#fff",
      fontWeight: "bolder",
      fontSize: "2.5em",
      marginTop: "20px",
      marginBottom: "10px",
      lineHeight: 1.1,
  },
  name : {
    color:"#F1E9F2",
    fontSize:"1.2em",
    fontWeight:800,
  },
  presentationText : {
    textAlign : opt.device === "pc" ? "left" : "center",
    color:"#F1E9F2",
    fontSize : "0.9em",
    lineHeight: 1.42857143,
    padding : "0px 10px 0px 10px"
  },
  nodejsImgContainer : {
    width : "250px",
    //border : "1px solid blue",
    display : "flex",
    justifyContent : "center",
    paddingTop :  opt.device === "pc" ? "0px" : "100px",
  },
  nodejsImg : {
    height : "120px",
    margin : opt.device === "pc" ? "0px auto 0px 0px" : "0px auto 20px auto",
    paddingRight : opt.device === "pc" ? "40px" : "0px",
   // border : "1px solid blue"
  },
}
)
export default styles

