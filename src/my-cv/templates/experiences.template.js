import React from 'react'
import ExperienceDetail from "./experience-detail.template.js"


import Container from './../components/container.component.js'
import LineTitle from "./../components/line-title.component.js"
import ScrollTop from './../components/scroll-top/scroll-top.component.js'


import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
   // flex: 1,
    
  },
  date : {
    fontWeight : 900,
  }
};

const Experiences = ({ 
  styles, 
  experiences, 
  toggleBool, 
  openDetails, 
  isDetailOpen,
  expDetails,
  classes}) => {

  return (
    <Container id="experiences" backgroundColor="#281D24" color="white">
      
      <LineTitle title="EXPERIENCES"/>
      
    {
        experiences.map((item, index)=>{
        return (
          <div 
            key={"experience"+index}
            style={styles.expContainer}
            {...styles.expContainer.attr}
            onClick={()=>openDetails(index)}
            >           
            <h4 style={styles.date}>{item.startDate} - {item.endDate}</h4>
            <h4 style={styles.title}>{item.title}</h4>
            
            <p style={styles.description}>{item.description}</p>
            {item.society && <div style={styles.societyName}>{item.society.name}</div>}
          </div>
        )
      })
    }
    <ScrollTop />
     <Dialog
        open={isDetailOpen}
        onClose={()=>toggleBool('isDetailOpen')}
        //maxWidth={'md'}
        fullWidth={true}
        fullScreen={true}
        TransitionComponent={Transition}
      >
       <AppBar style={{position : "relative", backgroundColor : "#281D24"}}>
          <Toolbar>
            <IconButton color="inherit" onClick={()=>toggleBool('isDetailOpen')}  aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={{flex : 1}}>
              {expDetails.title}
            </Typography>
             <Typography variant="title" color="inherit" style={{fontWeight : 900}}>
              {expDetails.startDate}-{expDetails.endDate}
            </Typography>
          </Toolbar>
        </AppBar>
        <ExperienceDetail 
          expDetails={expDetails}
          styles={styles.experienceDetails}
          />
      </Dialog>
      
  </Container>
  )
}

//export default withStyles(styles)(Experiences);
export default Experiences;

