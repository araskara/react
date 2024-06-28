import React from 'react';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';


const App = () => {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App













//---------Adding List-------------------

/*function App() {

  let items= ["New York", "Paris", "Istanbul","Izmir", "Vienna", "Salzburg", "Berlin", "Munich"]
  const handleSelectItem = (item: string) =>{console.log(item)}
  return (
    <div>
      <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;

*/