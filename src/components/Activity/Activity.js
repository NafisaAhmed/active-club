import React, { useEffect, useState } from 'react';
import img from '../../images/me.jpg'
import './Activity.css'

const Activity = ({ activity }) => {
    let time = 0;
    for (const activities of activity) {
        time += activities.time;
    }
    const [times, setTimes] = useState('');
    const getPreviousBreakTime = localStorage.getItem('times');
    const previousBreakTime = JSON.parse(getPreviousBreakTime);
    const increaseBreakTime = (breaks) => {
        if (previousBreakTime) {
            setTimes(breaks);
            localStorage.setItem('times', breaks);
        }
        else {
            localStorage.setItem('times', breaks);
            setTimes(breaks);
        }
    }
    console.log(times);
    return (
        <div className='activity'>
            <div className='instructor'>
                <img src={img} alt="" />
                <div className='instructor-info'>
                    <h3>Nafisa Ahmed</h3>
                    <p><small>Savar, Dhaka</small></p>
                </div>
            </div>
            <div className='other-infos'>
                <div>
                    <h2>46<small>kg</small></h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2>5.2</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2>23<small>yrs</small></h2>
                    <p>Age</p>
                </div>
            </div>
            <div className='break'>
                <h3>Add a Break</h3>
                <div className='break-time'>
                    <button onClick={() => increaseBreakTime(10)}>10s</button>
                    <button onClick={() => increaseBreakTime(20)}>20s</button>
                    <button onClick={() => increaseBreakTime(30)}>30s</button>
                    <button onClick={() => increaseBreakTime(40)}>40s</button>
                </div>
            </div>
            <div className='exercise'>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <h5>Exercise Time</h5>
                    <p><small>{time} seconds</small></p>
                </div>
                <div className='exercise-time'>
                    <h5>Break Time</h5>
                    <p><small>{times ? times + time : previousBreakTime ? previousBreakTime + time : 0} seconds</small></p>
                </div>
            </div>
            <button className='activity-completed'>Activity Completed</button>
        </div>
    );
};

export default Activity;