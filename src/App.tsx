import React from 'react';
import ListGroup from './components/ListGroup';

function App() {

  let items= ["New York", "Paris", "Istanbul","Izmir", "Vienna", "Salzburg", "Berlin", "Munich"]
  const handleSelectItem = (item: string) =>{console.log(item)}
  return (
    <div>
      <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
