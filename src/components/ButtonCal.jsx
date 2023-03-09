import React from 'react'
import {Header} from '.';

const ButtonCal = ({valueButton}) => {


  function handleNumberButton(valueButton){
    
  }
  return (
    <button onClick={() => handleNumberButton(valueButton)}>{valueButton}</button>
  )
}

export default ButtonCal