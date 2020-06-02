import React, { useState } from 'react';
import './App.css';

function Timer() {

  const initialTime = {
    hours: 5,
    minutes: 25,
  };
  const [time, setTime] = useState(initialTime);

  function changeTime(value, name) {
    console.log(time);
    setTime(function(prev) {
      return {
        ...prev,
        [name]: value
      }
    });
  } 


  return (
      <div> Show timer </div>
  );
}

export default Timer;