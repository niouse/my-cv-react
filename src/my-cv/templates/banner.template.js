import React from 'react'
import nodejs from "./../images/nodejs.png"

import Container from './../components/container.component.js'
import ScrollTop from './../components/scroll-top/scroll-top.component.js'

const Banner = ({
  styles, 
  scrollTo, 
  infos, 
  title, 
  texts
}) => {
  return (
      <Container id="banner-container">
        <div style={styles.centerBox}>
            <div id="photo-container">
            </div>
            <div style={styles.nodejsImgContainer}>
              <img id="diamond" src={nodejs} alt="#" style={styles.nodejsImg}/>
            </div>
            <div>
              <h2 style={styles.mainTitle}>{texts.beforeName} <strong style={styles.name}>{infos.firstName +" "+ infos.lastName}</strong></h2>
              <h3 style={styles.secondaryTitle}>{title}</h3>
              <p style={styles.presentationText}>{infos.presentation}</p>
            </div>
        </div>
        <ScrollTop />
      </Container>
  )
}
export default Banner