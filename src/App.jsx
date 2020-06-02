import React, { useState } from 'react';
import Header from "./Header";
import Start from "./Start";
import Timer from "./Timer";
import './App.css';

function App() {

  const [showTimer, changeShowTimer] = useState(false);
  
  function changeTimer(val) {
    changeShowTimer(val);
  }

  return (
    <div className="App">
      <Header />
      {!showTimer
      ? ( 
        <Start onChange={changeTimer} />
      )
      :
        <Timer />
      }
    </div>
  );
}

export default App;
