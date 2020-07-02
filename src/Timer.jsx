import React, { useState } from 'react';
import Stop from "./Stop";
import './App.css';

function Timer(props) {

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

  function changeStudy() {
    clearInterval(interval);
    var changes = {};
    const newValue = !time.isStudy;
    changes = newValue === true ? studyTime: breakTime;

    setTime(prev => {
      return {
        ...prev,
        ...changes
      };
    });
  }

  function changeTime() {
    clearInterval(interval);
    var changes = {};
    if (time.seconds === 0 && time.minutes === 0) {
      var newTime = !time.isStudy;
      changes = newTime === true ? studyTime: breakTime;
    } else if (time.seconds === 0) {
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

  function pad(num) {
    return num < 10 ? "0" + num : num;
  }


  let interval = setInterval(changeTime, "1000");

  return (
      <div class="timer-div">
        <span class="timer-span">
          {time.minutes} : {pad(time.seconds)}
        </span>
        <br />
        {time.isStudy ? 
        (
          <div class="badge badge-danger" onClick={changeStudy}>Study</div>
        ) 
        :
        (
          <div class="badge badge-success" onClick={changeStudy}>Break</div>    
        )
        }
        <Stop onChange={props.onChange} />
      </div>
  );
}

export default Timer;