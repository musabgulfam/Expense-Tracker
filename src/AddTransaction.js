import React, { useState } from 'react'
import debit from './GlobalContextDebit'
import credit from './GlobalContextCredit'
import t from './TransactionGlobalContext'

let AddTr = () => {
    let c=React.useContext(credit);
    let d=React.useContext(debit);
    let [text, setText] = useState('');
    let [amount, setAmount] = useState();
    let tr=React.useContext(t);
    return (
        <>
        <h3>Add new transaction</h3>
        <form>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount<br /></label>
                <input type="number" value={amount} onChange={(e)=>c[1](e.target.value)} placeholder="Enter credit amount here"></input>
                <br />
                <input type="number" value={amount} onChange={(e)=>{
                   d[1](e.target.value);
                   tr[0].concat(e.target.value);
                }} placeholder="Enter debit amount here"></input>
            </div>
            <button className="btn">Add transaction</button>
        </form>
        </>
    )
}

export default AddTr;
