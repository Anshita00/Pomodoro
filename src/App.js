import React, { useState } from 'react';
import DurationSelection from "./DurationSelection";

function App() {

  const date = new Date();
  const time = date.getHours() + " " + date.getMinutes();
  const [showTimer, setTimer] = useState();

  function changeTimer(val) {
    setTimer(val);
  }

  return (
    <div className="App">
    { showTimer
        ? <div> {time} </div> 
        : <DurationSelection />
    }
    </div>
  );
}

export default App;
