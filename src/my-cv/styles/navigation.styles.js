const styles = (opt, theme) => ({
  container : {
    display : "flex",
    //flexDirection : opt.device === 'pc' ? "row" : "column",
    width : "100%",
    justifyContent : "space-between",
    alignItems : "center",
    height : "45px",
    maxWidth : "1080px",
    margin : "auto",
  },
  fixedWrapper : {
    width : "100%",
    position : "fixed",
    top : 0,
    backgroundColor : "rgba(1,0,1,0.7)",
  },
  navigation : {
    display : opt.device === 'pc' ? "flex" : "none",
    justifyContent : "flex-end",
    alignItems : "center",
    fontSize : "0.9em",
    color : "#B5A9B7",
  },
  navButton : {
    padding : "0 8px 0 8px",
    textDecoration: "none",
    color: "#C5B7B8",
    //display : opt.device === 'pc' ? "inline-block" : "none",
  },
  flags : {
    height : '16px', 
    marginLeft : "10px",
    cursor : "pointer"
  },
  navigationMenu : {
   display : opt.device === 'pc' ? "none" : "inline",
    backgroundColor : "transparent",
    marginRight : opt.device === 'pc' ? "30px" : "10px",
    height : "30px",
    color : "white"
  },
  selectOption : {
    color : "black"
  }
})

export default styles
