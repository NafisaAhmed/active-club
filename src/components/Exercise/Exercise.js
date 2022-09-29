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
                        ></Product>)
                    }
                </div>
            </div>
            <div className='activity-container'>
                <Activity activity={activity}></Activity>
            </div>
        </div>
    );
};

export default Exercise;