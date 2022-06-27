import { useState } from 'react'
import './App.css'
import Bulb from './commponents/Bulb';
import Button from './commponents/MostrarOcultar'

function App() {
  
  const [isVisible, setIsVisible] = useState(true);
  const [isOn, setIsOn] = useState(true);

  const toggleIsOn = () => setIsOn(!isOn);
  // let isVisible = true;

  const toggleIsVisible = () => setIsVisible(!isVisible);


  return (
    <div className="App">
      <input type={isVisible ? "text" : "password"} />
      <button onClick={toggleIsVisible}>Mostrar / ocultar contraseña</button>
      <br />
      <br />
      <Button toggleIsOn={toggleIsOn} />
      <Bulb isOn={isOn} toggleIsOn={toggleIsOn}/>
      <Bulb isOn={isOn} toggleIsOn={toggleIsOn}/>
      <Bulb isOn={isOn} toggleIsOn={toggleIsOn}/>
      <Bulb isOn={isOn} toggleIsOn={toggleIsOn}/>
    </div>
  )
}

export default App
