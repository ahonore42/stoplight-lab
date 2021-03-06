import React, {useState} from 'react';
import './styles/App.css';
import StopLight from './components/StopLight';
import Highway from './components/Highway';


function App() {
  const [lights, setLights] = useState({red: false, yellow: false, green: false})
  console.log(lights)
  return (
    <div className="App">
      <StopLight lights={lights} setLights={setLights}/>
      <Highway lights={lights} />
    </div>
  );
}

export default App;
