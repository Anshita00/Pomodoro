import React, { useState } from 'react';
import Header from "./Header";
import './App.css';

function App() {

  const date = new Date();
  const [showTimer, changeShowTimer] = useState(false);
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

  function changeTimer(val) {
    changeShowTimer(val);
  }

  return (
    <div className="App">
    <Header />
    {!showTimer
    ? ( 
    <form method="post">
     {/* <h5>   How long are you working? (optional) </h5> */}
     <div class="form-group">
        {/* <input type="number" class="form-control" name="hours" min="1" max="23" onChange={(event) => changeTime(event.target.value, "hours")} placeholder={initialTime.hours} /> */}
        {/* <input type="number" class="form-control" name="minutes" min="0" max="59" onChange={(event) => changeTime(event.target.value, "minutes")} placeholder={initialTime.minutes}/> */}
        <button type="submit" className="start-btn" onClick={() => changeTimer(true)}> START </button>
      </div>
      </form>
    )
    :
      <div> Show timer </div>
    }
    </div>
  );
}

export default App;
