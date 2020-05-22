import React, { useState } from 'react';

export default function DurationSelection() {
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    function changeStartTime(event) {
        console.log(event.target.value);
        setStartTime(event.target.value);
    }

    function changeEndTime(event) {
        console.log(event.target.value);
        setEndTime(event.target.value);
    }

  return (
    <div>
        <label for="start"> Choose a starting time: </label>
        <input type="time" name="start" onChange={(event) => changeStartTime(event)} />
        <br />
        <label for="end"> Choose an ending time: </label>
        <input type="time" name="end" onChange={(event) => changeEndTime(event)} />
        <br />
        <button> Finish  </button>
    </div> 
  );
}