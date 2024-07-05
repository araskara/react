import React, { useState } from 'react';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import ExpenceList from './expense-tracker/components/ExpenceList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

 


function App () {



  const [expences, setExpences] = 
  useState([
    
    {id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    {id: 2, description: 'aaa', amount: 10, category: 'Utilities'},
    {id: 3, description: 'aaa', amount: 10, category: 'Utilities'},
    {id: 4, description: 'aaa', amount: 10, category: 'Utilities'},

  ])


  let items= ["New York", "Paris", "Istanbul","Izmir", "Vienna", "Salzburg", "Berlin", "Munich"]
  const handleSelectItem = (item: string) =>{console.log(item)}

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li><Link to="/button-alert">Button and Alert</Link></li>
                    <li><Link to="/listgroup">List Group</Link></li>
                    <li><Link to="/expenselist">Expense List</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/button-alert" element={
                    <>
                        <Button color='danger' onClick={() => setAlertVisibility(true)}>My Button</Button>
                        {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
                    </>
                } />
                <Route path="/listgroup" element={<ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem} />} />
                <Route path="/expenselist" element={<ExpenceList expenses={expences} onDelete={(id) => setExpences(expences.filter((e) => e.id !== id))} />} />
            </Routes>
        </div>
    </Router>
);
}

export default App;