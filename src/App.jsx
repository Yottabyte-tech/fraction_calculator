import { useState } from 'react'

import './App.css'

function App() {
  const [numOne, setNumOne] = useState(0)

  return (
    <>
      <div class='fraction' id='Numerator'>
          <input class='fractionNumber' type='number' style={{ width: '50px', height: '50px'}}></input>
        </div>
      <p></p>
      <div class='fraction' id='Denominator'>
          <input class='fractionNumber' type='number' style={{ width: '50px', height: '50px'}}></input>
        </div>                
    </>
  )
}

export default App
