import React from 'react'
import SkillRate from "./skill-rate.template.js"

import Container from './../components/container.component.js'
import LineTitle from "./../components/line-title.component.js"
import ScrollTop from './../components/scroll-top/scroll-top.component.js'


var Skills = ({styles, skills}) => {
  
  var formatedSkills = []
  
  skills.forEach((item, index)=>{
    if(formatedSkills.indexOf(item.type)===-1) formatedSkills.push(item.type)
  })
  
  formatedSkills=formatedSkills.map((item, index)=>{
    var content = []
    skills
      .filter((item2)=>item===item2.type)
      .forEach((item2, index2)=>{content.push(item2)})
    return ({
      type : item,
      skills : content
    })
  })
    
 const SkillsContainer = ({title, skills}) => ( 
    <div style={styles.skillsBox}>
        <div style={styles.skillType}>{title.toUpperCase()}</div>
        <div style={styles.skillsList}>
            {
              skills
                .map((item, index)=><SkillRate  key={title+index} name={item.name} rate={item.rate} />)
            }
        </div>
     </div>
  )
  
  return ( 
  <Container id="skills">
      <LineTitle title="SKILLS" />
      <div style={styles.content}>
        {
          formatedSkills.map((item, index)=>{
            return <SkillsContainer key={"skill"+index} title={item.type} skills={item.skills}/>
          })
        }
      </div>
      <ScrollTop />
    </Container>
  )
}

export default Skills