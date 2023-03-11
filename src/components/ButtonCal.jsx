import React from 'react'


const ButtonCal = ({valueButton, clickButton}) => {


  function handleClickButton(valueButton){
    clickButton(valueButton);
  }
  return (
    <button className='btn' onClick={() => handleClickButton(valueButton)}>{valueButton}</button>
  )
}

export default ButtonCal