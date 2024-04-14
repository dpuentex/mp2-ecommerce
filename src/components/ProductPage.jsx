import React from 'react'
import '../assets/css/browsepage.css'
import ProductCard from './ProductCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../ContextList';
import { createContext } from 'react';


export default function BrowsePage() {

    let [data, setData] = React.useState({})
    const [useCartContext, setUseCartContext] = useContext(CartContext)

    async function fetchProducts() {
        // fetch using dot env or 3000
      const response = await fetch(`http://127.0.0.1:${3000}/products/data`);
      let data = await response.json();
      setData(data);
      console.log(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    function consoleUseContext() {
        console.log(useCartContext);
    }
    function clearLocalStorage() {
        localStorage.clear();
        setUseCartContext([]);
    }

    function consoleLocalStorage() {
        console.log(localStorage);
        console.log(localStorage.getItem("CartLocalStorage"));
        console.log(localStorage.getItem("CartLocalStorage").split(","));
        
        console.log(localStorage.getItem("CartLocalStorage"));
    }   

    // array[x].product_id
    // array[x].product_name
    // array[x].images
    // array[x].price
    // array[x].description
    // array[x].stock
    // array[x].details_array
    return (
        <>
            <div className='button-test-div'>
                <button className="glow-squish-button dev-button" onClick={fetchProducts}>Fetch Products</button>
                <br />
                <button className="glow-squish-button dev-button" onClick={consoleLocalStorage}>console log local storage</button>
                <br />
                <button className="glow-squish-button dev-button" onClick={clearLocalStorage}>clear local storage</button>
                <br />
                <button className="glow-squish-button dev-button" onClick={consoleUseContext}>console log cart contents from useeffect</button>
            </div>
            
            {
                data.length > 0
                ? 
                    <div className='product-container'>{
                        data.map((product, index) => {
                            return (
                                <ProductCard key={index} product={product}/>
                            )
                        })
                        }</div>
                : 
                    null
                }
        </> 
    )
}

