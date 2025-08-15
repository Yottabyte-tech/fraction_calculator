import { useState } from 'react'

import './App.css'

function App() {
  const [numOne, setNumOne] = useState(0)

  return (
    <>
    <div class='FullEquation'>
      <div class='FractionFull'>
      <div class='fraction' id='Numerator'>
          <input class='fractionNumber' type='number' style={{ width: '50px', height: '50px'}}></input>
        </div>
      <p></p>
      <div class='fraction' id='Denominator'>
          <input class='fractionNumber' type='number' style={{ width: '50px', height: '50px'}}></input>
        </div>     
      </div>
          <select class='Operation' id="Operation" name="Select Operation" style={{ width: '50px', height: '50px', textAlign: 'center', fontSize: '35px'}}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>    

          </div>       
    </>
  )
}

export default App
