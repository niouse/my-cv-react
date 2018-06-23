import experiencesStyles from "./experiences.styles"
import navigationStyles from "./navigation.styles"
import bannerStyles from "./banner.styles"
import contactStyles from "./contact.styles"
import skillsStyles from "./skills.styles"
import formationsStyles from "./formations.styles.js"
//Images
import banner from "./../images/banner.jpg"
import contact from "./../images/footerbg.jpg"

import {section} from "./classes.js"

const styles = (opt, theme) => ({
  header : {
    display : "flex",
    flexDirection : "column",
    background: `url(${banner})`,
    minHeight:"700px",
    width:"100%",
    backgroundSize:"cover",
  },
  section1 : {
    ...section,
    backgroundColor : "#281D24",
  },
  section2:{
    ...section
  },
  section3:{
    ...section,
    backgroundColor : "#20191B",
  },
  footer : {
    display : "flex",
    flexDirection : "column",
    background: `url(${contact})`,
    minHeight:"567px",
    width:"100%",
    backgroundSize:"100%",
  },
  experiences : experiencesStyles(opt),
  navigation : navigationStyles(opt),
  banner : bannerStyles(opt),
  contact : contactStyles(opt),
  skills : skillsStyles,
  formations : formationsStyles,
})

export default styles