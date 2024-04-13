import React from 'react'
import '../assets/css/browsepage.css'
import ProductCard from './ProductCard';
import { configDotenv } from 'dotenv';


export default function BrowsePage() {

    let [data, setData] = React.useState({})

    async function fetchProducts() {
        // fetch using dot env or 3000
      const response = await fetch(`http://127.0.0.1:${3000}/products/data`);
      let data = await response.json();
      setData(data);
      console.log(data);
    }

    function clearLocalStorage() {
        localStorage.clear();
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
                <button onClick={fetchProducts}>Fetch Products</button>
                <br />
                <button onClick={consoleLocalStorage}>console log local storage</button>
                <br />
                <button onClick={clearLocalStorage}>clear local storage</button>
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

