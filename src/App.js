import React from 'react';
import './App.css';
import Amount from './Amount'
import Income from './Income'
import Expense from './Expense'
import AddTr from './AddTransaction'
import credit from './GlobalContextCredit'
import debit from './GlobalContextDebit'
import a from './GlobalAmountContext'
import TH from './TransactionHistory'
import t from './TransactionGlobalContext'

//import AddTransaction from './AddTransaction'

function App() {
  let c = React.useState(0);
  let d = React.useState(0);
  let tra = React.useState([]);
  let am = React.useState(0);
  return (
    <t.Provider value={tra}>
      <a.Provider value={am}>
        <debit.Provider value={d}>
          <credit.Provider value={c}>
            <div className="App">
              <h2>Expense tracker</h2>
              <Amount />
              <Income />{/*I personally didn't like the add/minus logic for expenses or income, that's why I introduced 2 seperate components i.e. <Income> and <Expenses>*/}
              <Expense />
              {/*<TH />*/}
              <TH />
              <AddTr />
            </div>
          </credit.Provider>
        </debit.Provider>
      </a.Provider>  
    </t.Provider>  
  );
}

export default App;
