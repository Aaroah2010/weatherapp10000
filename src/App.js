import './App.css';
import axios from 'axios';
import { useState } from 'react';
import './App.css'

function App() {
  let [city, setCity] = useState('')
  let [temp, setTemp] = useState('')
  let [minTemp, setMinTemp] = useState('')
  let [maxTemp, setMaxTemp] = useState('')
  let [sunSet, setSS] = useState('')
  let [sunRise, setSShigh] = useState('')

  function fun() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=imperial&appid=b17043b353745aa78cd12f303db39f7c').then(function(response){
console.log(response)

setTemp(response.data.main.temp)
setMinTemp(response.data.main.temp_min)
setMaxTemp(response.data.main.temp_max)
setSS(response.data.sys.sunrise )
setSShigh(response.data.sys.sunset)

  })
  }
  function stuff(x) {
    setCity(x.target.value)
  }
  return (
    <div className="App">
      <input type="text" name="" id="" value={city} onChange={stuff} />
      <br />
      <button onClick={fun}

      >Click me</button>
     {  temp !== ''}?(<>
      <h1>Weather is</h1>
      <ul>
        <li><h2>Temprature is {temp}</h2></li>
        <li><h3>Min Temprature is {minTemp}</h3></li>
        <li><h3>Max Temprature is {maxTemp}</h3></li>
        <li><h3>Sunset is {sunSet}</h3></li>
        <li><h3>Sunrise is {sunRise}</h3></li>

      </ul>
     </>) : (<></>)
      
    </div>
  );
}

export default App;
