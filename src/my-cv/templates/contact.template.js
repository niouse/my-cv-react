import React from 'react'
//import LineTitle from "./line-title.template.js"
import linkedin from "./../images/in.png"
import twitter from "./../images/twt.png"
import facebook from "./../images/fb.png"

import Container from './../components/container.component.js'
import LineTitle from "./../components/line-title.component.js"
import ScrollTop from './../components/scroll-top/scroll-top.component.js"


const Contact = ({
  styles, 
  handleFromChange, 
  submitForm,
  form}) => {
  return (
    <Container id="contact" >
		    <LineTitle title="CONTACT"/>
			<div style={styles.contactBox}> 
				<div style={styles.contactInfosBox}>
                    <div style={styles.linkBox}>
                       <a style={styles.link} href="/#"><img src={linkedin} alt="linkedin"/></a>
                       <a style={styles.link} href="/#"><img src={twitter} alt="twitter"/></a>
                       <a style={styles.link} href="/#"><img src={facebook} alt="facebook"/></a>
                   </div>
                   <p style={styles.infos}>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                   quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                   id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                   Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
                   ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
				</div>
			  
				<div style={styles.contactFormBox}>
                  <form style={styles.contactForm} onSubmit={submitForm}>
                      <input 
                        style={styles.input} 
                        type="text" 
                        value={form.name} 
                        onChange={(e)=>handleFromChange(e, 'name')}/>
                      <input 
                        style={styles.input} 
                        type="text" 
                        value={form.email} 
                        onChange={(e)=>handleFromChange(e, 'email')}/>
                      <textarea 
                        style={styles.input} 
                        rows="5" 
                        cols="70"
                        onChange={(e)=>handleFromChange(e, 'message')}
                        value={form.message} />
                      <input 
                        style={styles.sendButton} 
                        type="submit" 
                        value="SEND" /> 
                  </form>
				</div>
			</div>
		<a href="/#top-top"><span> </span></a>  
	</Container>
  )
}

export default Contact