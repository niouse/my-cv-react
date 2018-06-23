import React from 'react'
import styles from "./../styles/skill-rate.styles.js"

const SkillRate = ({name, rate})=>{
  
  
  const Circle = ({primary}) =>( 
    <div style={primary ? styles.circle1 : styles.circle2}></div>
  )
  
  var rateArray = new Array(5).fill(false)
  
  
  return (
    <div style={styles.container}>
      <span style={styles.name}>{name}</span> 
      <div style={styles.circlesBox}>
        {
           rateArray
             .map((item, index)=>index+1>rate)
             .map((item, index)=><Circle key={"circle"+index} primary={item} />)
        }
      </div>
      
    </div>
  )
}

export default SkillRate