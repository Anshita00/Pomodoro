import React, { useState } from 'react';
import './App.css';


function Stop(props) {

    return (
        <form>
        <div class="form-group">
            {/* <input type="number" class="form-control" name="hours" min="1" max="23" onChange={(event) => changeTime(event.target.value, "hours")} placeholder={initialTime.hours} /> */}
            {/* <input type="number" class="form-control" name="minutes" min="0" max="59" onChange={(event) => changeTime(event.target.value, "minutes")} placeholder={initialTime.minutes}/> */}
            <button type="submit" className="stop-btn" onClick={() => props.onChange(true)}> 
                <div class="stop">
                </div>
             </button>
            </div>
            </form>
    );
}

export default Stop;