import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  
  const [isVisible, setIsVisible] = useState(true);
  //const [isOn, setIsOn] = useState(true);

  const toggleIsOn = () => setIsOn(!isOn);
  // let isVisible = true;

  const toggleIsVisible = () => setIsVisible(!isVisible);


  return (
    <div className="App">
      <input type={isVisible ? "text" : "password"} />
      <button onClick={toggleIsVisible}>Mostrar / ocultar contraseña</button>
      <br />
    </div>
  )
}

export default App
