import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Exercise.css'

const Exercise = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='exercise-container'>
            <div className='adding-container'>
                <h1 className='header-text'>Stay-Active-Always</h1>
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
            <div className='cart-container'>

            </div>
        </div>
    );
};

export default Exercise;