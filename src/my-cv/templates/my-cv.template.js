import React from 'react';

import Navigation from './navigation.template'
import Banner from './banner.template'
import Experiences from "./experiences.template"
import Contact from "./contact.template"
import Skills from "./skills.template"
import Formations from "./formations.template.js"

const Template = ({
  styles, 
  texts,
  cv, 
  navItems, 
  toggleBool, 
  openDetails, 
  isDetailOpen,
  expDetails,
  setLanguage,
  scrollTo,
  form,
  handleFromChange,
  submitForm }) => {
  return (
    <div className="App">
      <header style={styles.header}>
        <Navigation 
          navItems={navItems}
          styles={styles.navigation}
          setLanguage={setLanguage}
          scrollTo={scrollTo}
          />
        <Banner 
          styles={styles.banner}
          scrollTo={scrollTo}
          infos={cv.personalInfos}
          title={cv.title}
          texts={texts.banner}
          />
      </header>
      <section  style={styles.section1}>
        <Experiences 
         styles={styles.experiences}
         experiences={cv.experiences}
         toggleBool={toggleBool}
         openDetails={openDetails}
         isDetailOpen={isDetailOpen}
         expDetails={expDetails}
         texts={texts.experiences}
         />
      </section>
      <section style={styles.section2}>
        <Skills 
          styles={styles.skills}
          skills={cv.skills}
          texts={texts.styles}
          />
      </section>
      <section style={styles.section3}>
        <Formations 
          styles={styles.formations}
          formations={cv.formations}
          texts={texts.formations}
          />
      </section>
      <footer style={styles.footer}>
         <Contact 
            styles={styles.contact}
            form={form}
            handleFromChange={handleFromChange}
            submitForm={submitForm}
            texts={texts.contact}
            />
      </footer>
     
    </div>
  );
}

export default Template;
