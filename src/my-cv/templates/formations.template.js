import React from 'react'

import LineTitle from "./../components/line-title.component.js"
import Container from './../components/container.component.js'
import ScrollTop from './../components/scroll-top/scroll-top.component.js'


const Formations = ({styles, formations})=>{
  return (
    <Container id="formations">
      <LineTitle title={"FORMATIONS"}/>
      <div style={styles.content}>
        {
          formations.map((item, index)=>{
            return (
              <div key={"formation"+index} style={styles.row}>
                <div style={styles.dates}>{item.startDate+'-'+item.endDate}</div>
                <div style={styles.title}>{item.title}</div>
                <div style={styles.schoolName}>{item.schoolName+' - ' + item.location}</div>
              </div>
            )
          })
        }
      </div>
      <ScrollTop />
    </Container>
  )
}

export default Formations