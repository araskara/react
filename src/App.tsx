import React, { useState } from 'react';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
 


function App () {

  let items= ["New York", "Paris", "Istanbul","Izmir", "Vienna", "Salzburg", "Berlin", "Munich"]
  const handleSelectItem = (item: string) =>{console.log(item)}

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Button color='danger' onClick={()=> setAlertVisibility(true)}>My Button</Button>
      {alertVisible&&<Alert onClose={()=> setAlertVisibility(false)}> My Alert</Alert>}
      <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App