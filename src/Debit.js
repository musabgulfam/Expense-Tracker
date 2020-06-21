import React from 'react'
import debit from './GlobalContextDebit'

let Debit = () => {
    let d=React.useContext(debit);
    return (
        <h3>Expense: ${d[0]}</h3>
    )
}

export default Debit;