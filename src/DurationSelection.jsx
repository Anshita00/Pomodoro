import React, { useState } from 'react';

export default function DurationSelection() {
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
  return (
    <div>
        <label for="start"> Choose a starting time: </label>
        <input type="time" name="start" />
        <br />
        <label for="end"> Choose an ending time: </label>
        <input type="time" name="end" />
    </div> 
  );
}