import experienceDetailsStyles from "./experiences-details.styles.js"

const styles = (opt, theme) => ({
  expContainer : {
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center",
    padding : "20px 0px 35px 0px",
    width : "100%",
    attr : {
      onMouseOver : (e)=>e.currentTarget.style.backgroundColor="rgba(0,0,0,0.5)",
      onMouseOut : (e)=>e.currentTarget.style.backgroundColor="inherit"
    },
    cursor : "pointer"
  },
  title : {
    margin : 0,
    padding : "10px 0px 10px 0px",
    fontSize : "18px",
    lineHeight : "20px",
    fontWeight : 300,
  },
  date : {
    margin : 0,
    padding : "10px 0px 10px 0px",
    fontSize : "18px",
  },
  societyName : {
    fontWeight : 900
  },
  description : {
    maxWidth : "400px",
    margin : "auto",
    textAlign : "center",
    fontStyle : "italic",
    fontSize : "14px",
    lineHeight : "28px",
  },
  experienceDetails : experienceDetailsStyles(opt, theme)
})

export default styles