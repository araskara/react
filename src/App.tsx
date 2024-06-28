import React from 'react';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';


const App = () => {
  return (
    <div>
      <Button color='danger' onClick={()=> console.log('Clicked!')}>My Button</Button>
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