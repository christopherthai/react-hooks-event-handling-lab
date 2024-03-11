// Code Keypad Component Here
import React from "react";

function Keypad() {

  function inputChange(event) {
    console.log('Entering password...')
  }

  return (
    <input type="password" onChange={inputChange} />
  )
}

export default Keypad;