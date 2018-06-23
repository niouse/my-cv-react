const styles = (opt, theme) => ({
  contactBox : {
    display : "flex",
    width : "100%",
    flexDirection : opt.device === "pc" ? "row" : "column",
  },
  contactFormBox : {
    width : "50%",
    padding : "10px",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    margin : "auto",
  },
  contactInfosBox : {
    width : opt.device === "pc" ? "50%" : "90%",
     padding : "10px",
     display : "flex",
    //justifyContent : "center",
    alignItems : "center",
    flexDirection : "column",
    textAlign : opt.device === "pc" ? "left" : "center",
    margin : "auto"
  },
  contactForm : {
    display : "flex",
    flexDirection : "column",
    width : opt.device === "pc" ? "50%" : "100%",
    alignItems : opt.device === "pc" ? "flex-end" : "center",
  },
  linkBox : {
    width: "80%",
  },
  link : {
    padding : "0px 5px 0px 5px",
  },
  infos : {
    color: "#B5A9B7",
    width: "80%",
    lineHeight: "2em",
  },
  input : {
    background: "#170F12",
    color: "#B5A9B7",
    padding: "1em 0.8em",
     width : opt.device === "pc" ? "100%" : "100%",
    marginBottom: "1em",
    outline: "none",
    border: "solid 1.5px",
    borderColor: "#9A9A9A"
  },
  textArea : {
    background: "#170F12",
    color: "#B5A9B7",
    padding: "1em 0.8em",
    width: "75%",
    marginBottom: "1em",
    outline: "none",
    border: "solid 1.5px",
    borderColor: "#9A9A9A",
  },
  sendButton : {
    textAlign: "center",
    float: "right",
    color: "#D2D1D1",
    fontSize: "1.2em",
    outline: "none",
    padding: "0.6em 1.5em",
    border: "1px solid #B8ABAB",
    background: "none",
    width : "120px",
    
  }
})

export default styles