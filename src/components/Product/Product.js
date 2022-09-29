import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { name, img, age, time, description } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>For Age: {age}</p>
                <p>Time required: {time}s</p>
            </div>
            <button className='btn-add'>Add to List</button>
        </div>
    );
};

export default Product;