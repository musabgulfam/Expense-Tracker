import React from 'react'
import credit from './GlobalContextCredit'

let Credit = () => {
    let c=React.useContext(credit);
    return (
        <h3>Income: ${c[0]}</h3>
        
    )
}

export default Credit;