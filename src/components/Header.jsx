import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [result, setResult] = useState(0.0)

  function numberButton(number) {
    const newNumber = result * 10 + number;
    setResult(newNumber)
  }

  function clearOperation() {
    setResult(0);
  }

function doOperations() {
  
}

  return (
    <div>
      <h1> Simple Calculator App</h1>
      <label>{result}</label>
      <br />
      <div>
        <button onClick={() => numberButton(7)}>7</button>
        <button onClick={() => numberButton(8)}>8</button>
        <button onClick={() => numberButton(9)}>9</button> 
        <button onClick={clearOperation}>Clear</button>
        <br />
      </div>

      <div>
        <button onClick={() => numberButton(4)}>4</button>
        <button onClick={() => numberButton(5)}>5</button>
        <button onClick={() => numberButton(6)}>6</button>
        <button onClick={() => { doOperations() }}>/</button>
        <br />
      </div>

      <div>
        <button onClick={() => numberButton(1)}>1</button>
        <button onClick={() => numberButton(2)}>2</button>
        <button onClick={() => numberButton(3)}>3</button>
        <br />
      </div>
      <div>
        <button onClick={() => numberButton(0)}>0</button>
      </div>

    </div>
  )
}

export default Header