import React from 'react'
import debit from './GlobalContextDebit'
import credit from './GlobalContextCredit'

let Amount = () => {
    let c=React.useContext(credit);
    let d=React.useContext(debit);
    //let [amount, setAmount] = React.useState(0);
    return <h2>Amount left: ${c[0]-d[0]}</h2>
}

export default Amount;
