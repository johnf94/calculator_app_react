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

  const objSigns = [
    { name: 'CE', function: () => { clearScreen() } },
    { name: 'C', function: () => { clearOperation() } },
    { name: '<-', function: () => { backSpace() } },
    { name: '/', function: () => { doOperation('/') } },
    { name: 'X', function: () => { doOperation('*') } },
    { name: '-', function: () => { doOperation('-') } },
    { name: '+', function: () => { doOperation('+') } },
    { name: '+-', function: () => { symbolsPlusMinus('') } },
    { name: '.', function: () => { insertDot() } },
    { name: '=', function: () => { result() } },

  ]
  const [screenNumber, setScreenNumber] = useState('');
  const [signToOperate, setSignToOperate] = useState('');
  const [saveScreenNumber, setSaveScreenNumber] = useState('');

  function clickButton(character) {
    const numRegex = /^\d+$/;
    if (numRegex.test(character)) {
      const newNumber = screenNumber.toString() + character.toString();
      setScreenNumber(newNumber)
    } else {
      const result = objSigns.find(sign => {
        return sign.name===character.replace(/\s/g, '');
      });
      result.function();
      
      // console.log("-"+sign.replace(/\s/g, '')+"-")
    }

  }

  function symbolsPlusMinus() {
    setScreenNumber(eval(screenNumber*-1).toString()) 
    
  }

  function backSpace() {
    
  }
  function insertDot() {
   const hasDot = screenNumber.includes('.');
   if(hasDot===false)
    setScreenNumber(screenNumber+'.')

  }

  function doOperation(signToOperate) {
    setSignToOperate(signToOperate);
    setSaveScreenNumber(screenNumber);
    setScreenNumber('')
  }

  function clearOperation() {
    setSignToOperate('');
    setScreenNumber('');    
  }

  function clearScreen() {
    setScreenNumber('');
    setSignToOperate('');
    setSaveScreenNumber('');
  }

  function result(callback){
    const result =eval(saveScreenNumber+signToOperate+screenNumber);
    setSaveScreenNumber(0);
    setScreenNumber(result);
  }
  

  return (
    <div>
      <h1> Simple Calculator App</h1>
      <p>{saveScreenNumber}</p>
      <p>{signToOperate}</p>
      <label>{screenNumber}</label>
      <br />

      {buttonsSigns.map((signs, index) => {
        return (
          <div key={index}>
            {signs.map((sign, sIndex) => {

              return <ButtonCal key={sIndex} valueButton={sign} clickButton={clickButton} />;
            })}
          </div>
        );
      })}
      {/* <h4>{eval(saveScreenNumber+signToOperate+screenNumber)}</h4> */}
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