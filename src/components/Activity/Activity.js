import React from 'react';
import img from '../../images/me.jpg'
import './Activity.css'

const Activity = () => {
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
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div>
            <div className='exercise'>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <h5>Exercise Time</h5>
                    <p><small>seconds</small></p>
                </div>
                <div className='exercise-time'>
                    <h5>Break Time</h5>
                    <p><small>seconds</small></p>
                </div>
            </div>
            <button className='activity-completed'>Activity Completed</button>
        </div>
    );
};

export default Activity;