const styles = (opt, theme) => ({
  container : {
    padding : opt.device === 'pc' ? "50px" : "10px",
    color : "grey",
  },
  title : {
    fontSize : "1.5em",
    letterSpacing : "5px",
    color : "grey",
    paddingRight: "70px"
  },
  duration : {
    textAlign : "right",
    letterSpacing : "5px",
  },
  date : {
    fontSize : "1.5em",
    fontWeight : 900,
    fontColor : "grey",
    letterSpacing : "5px",
    textAlign : "right",
  },
  type : {
    //textAlign : "right",
    letterSpacing : "5px",
  },
  description : {
    padding : "0px 20px 0px 20px",
  },
  missions  :{

  },
  mission : {
    fontSize : "1em",
    color : "grey",
    paddingTop : "10px",
    width : "100%"
  },
  society : {
    display : "flex",
    name : {
    color : "grey",
    },
  link : {
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
    },
    description : {
      color : "grey",
    },
    logo : {
      height : "64px"
    }
  },
  skillsLearneds : {
    listStyle : "none",
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "center",
    paddingTop: "30px"
  },
  skillsLearned : {
    display : "flex",
    alignItems : "center",
    paddingRight : "40px",
    fontSize : "1.2em",
    color : "grey",
  },
  check : {
    height : "24px",
    width : "24px",
    marginRight : "5px",
  },
  section : {
    paddingBottom : "70px"
  },
  sectionTitle : {
    color : "grey",
    fontSize : "1.1em",
    fontWeight : 900,
    borderBottom : "1px solid grey",
    marginBottom : "20px",
   // marginTop : "70px",
    
  },
  wrapper1 : {
    display:"flex", 
    justifyContent : "space-between"
  },
  wrapper2 : {
    display : "flex",
    flexDirection : "column",
    justifyContent : "flex-end",
    paddingBottom : "40px"
  }
})

export default styles