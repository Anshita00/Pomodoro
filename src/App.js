import React, { useState } from 'react';

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
        : <div>
            Select duration screen
         </div> 
    }
    </div>
  );
}

export default App;
