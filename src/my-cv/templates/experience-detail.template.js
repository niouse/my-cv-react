import React from 'react'
import check from './../images/check.png'

const ExperienceDetail = ({
  styles,
  expDetails
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper2}>
        <div style={styles.duration}>{expDetails.duration}</div>
        <div style={styles.type}>{expDetails.type}</div>
      </div>
      <section style={styles.section}>
        <div style={styles.sectionTitle}>DESCRIPTION  </div>
        <div style={styles.description}>{expDetails.description}</div>

          <ul style={styles.skillsLearneds}>
          {expDetails.skillsLearned.map((skillsLearned, index)=><li key={"skillLearned"+index} style={styles.skillsLearned}><img style={styles.check} src={check} alt="check"/>{skillsLearned}</li>)}
        </ul>
      </section>
       <section style={styles.section}>
      <div style={styles.sectionTitle}>MISSIONS  </div>
      <ul style={styles.missions}>
        {expDetails.missions.map((mission, index)=><li key={"mission"+index} style={styles.mission}>{mission}</li>)}
      </ul>
      </section>
      <section>
      {expDetails.society &&  <div style={styles.sectionTitle}>SOCIETE</div>}
      {expDetails.society && <div style={styles.society}>
       
        <div>
          <div style={styles.society.description}>{expDetails.society.description}</div>
        </div>
        <a 
          href={expDetails.society.link}
          style={styles.society.link}>
          <img 
            style={styles.society.logo}
            src={expDetails.society.logo} 
            alt="logo" 
            />
        </a>
      </div>}
      </section>
    </div>
  )
}

export default ExperienceDetail