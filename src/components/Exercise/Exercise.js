import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import logo from '../../images/active.png'
import './Exercise.css'
import Activity from '../Activity/Activity';

const Exercise = () => {
    const [products, setProducts] = useState([]);
    const [activity, setActivity] = useState([]);

    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToList = (selectedExercise) => {
        const newActivity = [...activity, selectedExercise];
        console.log(activity);
        setActivity(newActivity);
    }

    return (
        <div className='exercise-container'>
            <div className='adding-container'>
                <div className='logo-container'>
                    <img src={logo} alt="" />
                    <h1 className='header-text'>Stay-Active-Always</h1>
                </div>
                <h3>Select todays exercise</h3>
                <div className='product-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToList={handleAddToList}
                        ></Product>)
                    }
                </div>
                <div className='ques-ans'>
                    <h2>Question/Answer</h2>
                    <h3>#Q1. How does react works?</h3>
                    <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                    <h3>#Q2. What is the difference between props and state?</h3>
                    <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                    <h3>#Q3. What else can be done by useEffect except loading api?</h3>
                    <p>Ans: 1. Running on state change: validating input field <br />
                        2. Running on state change: live filtering <br />
                        3. Running on state change: trigger animation on new array value <br />
                        4. Running on props change: update paragraph list on fetched API data update <br />
                        5. Running on props change: updating fetched API data to get BTC updated price</p>
                </div>
            </div>
            <div className='activity-container'>
                <Activity
                    activity={activity}
                ></Activity>
            </div>
        </div>
    );
};

export default Exercise;