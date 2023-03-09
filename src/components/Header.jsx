import React from 'react'
import { useState } from 'react'

import { ButtonCal } from './';

const Header = () => {
  const buttonsSigns =
    [
      ['CE', 'C ', '<-', '/ '],
      [7, 8, 9, 'X '],
      [4, 5, 6, '- '],
      [1, 2, 3, '+ '],
      ['+-', 0, '. ', '= '],
      // ['','','',''],
    ];
  const [firstNumber, setFirstNumber] = useState(0.0)
  const [lastNumber, setLastNumber] = useState(0.0)

  function numberButton(number) {
    const newNumber = firstNumber * 10 + number;
    setFirstNumber(newNumber)
  }

  function clearOperation() {
    setFirstNumber(0);
  }

  function doOperations() {

  }

  function calculate(params) {

  }

  return (
    <div>
      <h1> Simple Calculator App</h1>
      <label>{firstNumber}</label>
      <br />

      {buttonsSigns.map((signs, index) => {
        return (
          <div key={index}>
            {signs.map((sign, sIndex) => {
              return  <ButtonCal key={sIndex} valueButton={sign} />;
            })}
          </div>
        );
      })}

      {/* {
        buttonsSigns.map((signs,i) => {
          signs.map((sign, index) => {
            // console.log(sign);
            <ButtonCal valueButton={sign} />
          })
        })
      } */}



      {/*  <div>
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
      </div> *
      <div>
        <button onClick={() => numberButton(0)}>0</button>
        <button onClick={calculate}>=</button>
      </div> */}

    </div>
  )
}

export default Header