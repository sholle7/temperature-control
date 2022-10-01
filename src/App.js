import './App.css';
import { useState } from 'react';

function App() {
  const[temperature, setTemperature] = useState(15);
  const[temperatureBackgroundColor, setTemperatureBackgroundColor] = useState("neutralTemperature");

  const increaseTemperature = () =>{
    const increasedTemperature = temperature + 1;
    if(increasedTemperature > 30) return;

    setTemperature(prevValue => prevValue + 1);

    if(increasedTemperature >= 20) setTemperatureBackgroundColor("hotTemperature")
    else if(increasedTemperature >= 10) setTemperatureBackgroundColor("neutralTemperature")
    else setTemperatureBackgroundColor("coldTemperature")
  }

  const decreaseTemperature = () =>{
    const decreasedTemperature = temperature - 1;
    if(decreasedTemperature < -30) return;

    setTemperature(prevValue => prevValue - 1)

    if(decreasedTemperature >= 20) setTemperatureBackgroundColor("hotTemperature")
    else if(decreasedTemperature >= 10) setTemperatureBackgroundColor("neutralTemperature")
    else setTemperatureBackgroundColor("coldTemperature")
  }
  

  return (
    <div className="main-content-container">

      <div className="temperature-container">
        <div className = {`temperature-display ${temperatureBackgroundColor}`}>{temperature + "°C"}</div>
      </div>

      <div className="button-container ">
        <button onClick={() => {decreaseTemperature()} }>-</button>
        <button onClick={() => {increaseTemperature()} }>+</button>
      </div>

    </div>
  );
}

export default App;
