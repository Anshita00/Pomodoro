import React, { useState } from 'react';
import './App.css';

function Timer() {

  const studyTime = {
    minutes: 25,
    seconds: 0,
    isStudy: true
  };

  const breakTime = {
    minutes: 5,
    seconds: 0,
    isStudy: false
  };

  const [time, setTime] = useState(studyTime);

  function changeTime() {
    clearInterval(interval);
    var changes = {};
    if (time.seconds == 0 && time.minutes == 0) {
      var newTime = !time.isStudy;
      changes = newTime == true ? studyTime: breakTime;
    } else if (time.seconds == 0) {
      changes.seconds = 59;
      changes.minutes = time.minutes - 1;
    } else {
      changes.seconds = time.seconds - 1;
    }
    console.log(changes);
    setTime(prev => {
      return {
          ...prev,
          ...changes
      }
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