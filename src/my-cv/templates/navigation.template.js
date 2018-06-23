import React from 'react'

import enFlag from './../images/flags/uk.png'
import frFlag from './../images/flags/fr.png'

var Navigation = (props) => {
  
  const {
  styles, 
  navItems,
  setLanguage,
  scrollTo
  }=props
  
  return ( 
  <div style={styles.fixedWrapper}>
    <div 
      style={styles.container}
      >
        <div>
          <img 
            src={enFlag} 
            style={styles.flags}
            onClick={()=>setLanguage('en')}
            alt="uk flag"></img>
          <img 
            src={frFlag}  
            style={styles.flags}
            onClick={()=>setLanguage('fr')}
            alt="fr flag"
            ></img>
          </div>
        <nav id="navigation"
          style={styles.navigation}
          >

          {
            navItems.map((item, index)=>{
              return( 
                <a 
                 style={styles.navButton}
                 href={item.link}
                 key={'navItem'+index}
                 onClick={(e)=>scrollTo(e, item.link)}>
                {item.text}
              </a>
              )
            })
          }
        </nav>
         <select
           // onClick={(e)=>scrollTo(e, 'formations')}
            style={styles.navigationMenu}
            onChange={(e)=>scrollTo(e, e.currentTarget.value)}
            >
            <option 
             style={styles.navButton}
             value={'banner'}>
              A PROPOS
            </option>
            
            {
            navItems.map((item, index)=>{
              return( 
                <option 
                 style={styles.selectOption}
                 key={'menuItem'+index}
                 value={item.link}
                 onClick={(e)=>scrollTo(e, 'formations')}>
                  {item.text}
                </option>
              )
            })
          }
          </select>

      </div>
    </div>
  )
}

export default Navigation