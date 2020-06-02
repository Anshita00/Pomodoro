import React, { useState } from 'react';
import Header from "./Header";
import './App.css';

function Start(props) {
    return (
        <form>
        {/* <h5>   How long are you working? (optional) </h5> */}
        <div class="form-group">
           {/* <input type="number" class="form-control" name="hours" min="1" max="23" onChange={(event) => changeTime(event.target.value, "hours")} placeholder={initialTime.hours} /> */}
           {/* <input type="number" class="form-control" name="minutes" min="0" max="59" onChange={(event) => changeTime(event.target.value, "minutes")} placeholder={initialTime.minutes}/> */}
           <button type="submit" className="start-btn" onClick={() => props.onChange(true)}> START </button>
         </div>
         </form>
    );
}

export default Start;