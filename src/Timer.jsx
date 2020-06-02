import React, { useState } from 'react';
import './App.css';

function Timer() {

  const initialTime = {
    minutes: 25,
    seconds: 0
  };

  const [time, setTime] = useState(initialTime);

  function changeTime() {
    let newSeconds = time.seconds;
    let newMinutes = time.minutes;
    if (time.seconds == 0) {
      newSeconds = 59;
      newMinutes -= 1;
    } else {
      newSeconds -= 1;
    }

  clearInterval(interval);
    setTime({
        minutes: newMinutes,
        seconds: newSeconds
    });
  } 


  let interval = setInterval(changeTime, "1000");

  return (
      <div>
        <span class="timer">
          {time.minutes} {time.seconds}
        </span>
      </div>
  );
}

export default Timer;