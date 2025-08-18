import { useState } from 'react'

import './App.css'

function App() {
  const [numerOne, setNumerOne] = useState(0)
  const [DenomiOne, setDenomiOne] = useState(0)
  const [numerTwo, setNumerTwo] = useState(0)
  const [DenomiTwo, setDenomiTwo] = useState(0)
  const [DecimalOut, setDecimalOut] = useState(0)


  const outValue = () => {
    const numOne = document.getElementById('NumerOne').value
    const denomiOne = document.getElementById('DenomiOne').value
    const numTwo = document.getElementById('NumerTwo').value
    const denomiTwo = document.getElementById('DenomiTwo').value

    setNumerOne(numOne)
    setDenomiOne(denomiOne)
    setNumerTwo(numTwo)
    setDenomiTwo(denomiTwo)

    const operation = document.getElementById('Operation').value

    if(operation == '+') {
        setDecimalOut(((numOne * denomiTwo) + (numTwo * denomiOne))/(denomiOne * denomiTwo));
      }
    else if(operation == '-') {
        setDecimalOut(((numTwo * denomiOne) - (numOne * denomiTwo))/(denomiTwo * denomiOne));
      }
    else if(operation == '*') {

      setDecimalOut((numOne * numTwo)/(denomiOne * denomiTwo));
  }
    else if(operation == '/') {
      setDecimalOut((numOne * denomiTwo)/(denomiOne * numTwo));

      }
  }

  return (
    <>

    
    <div class='FullEquation'>
      <div class='FractionFull'>
      <div class='fraction' id='Numerator'>
          <input onInput={outValue} class='fractionNumber' id='NumerOne' type='number' style={{ width: '50px', height: '50px'}}></input>
        </div>
      <p></p>
      <div class='fraction' id='Denominator'>
          <input onInput={outValue} class='fractionNumber' id='DenomiOne' type='number' style={{ width: '50px', height: '50px'}}></input>
        </div>     
      </div>
          <select onChange={outValue} class='Operation' id="Operation" name="Select Operation" style={{ width: '50px', height: '50px', textAlign: 'center', fontSize: '35px'}}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>   
 

      <div class='FractionFullTwo'>
      <div class='fraction' id='NumeratorTwo'>
          <input onInput={outValue} class='fractionNumber' id='NumerTwo' type='number' style={{ width: '50px', height: '50px'}}></input>
        </div>
      <p></p>
      <div class='fraction' id='DenominatorTwo'>
          <input onInput={outValue} class='fractionNumber' id='DenomiTwo' type='number' style={{ width: '50px', height: '50px'}}></input>
        </div>     


      </div> 



    </div>      

        <h1 class='output'>= {DecimalOut}</h1>
    </>
  )
}

export default App
