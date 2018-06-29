import React from 'react'
import computeOptions from "./../api/compute-options.js"

export const OptContext = React.createContext(computeOptions());

export const withOptions = (Comp) => {
     const CompWithOptions = () => {
         console.log()
            return <OptContext.Consumer>
             {opt => <Comp opt={opt}/>}
             </OptContext.Consumer>
        }
    
    return CompWithOptions
}

