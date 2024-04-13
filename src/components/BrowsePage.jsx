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


    let dummyData = [
        {
            "product_id": 1,
            "product_name": "door handle",
            "images": null,
            "price": "69.00",
            "description": "Best door handle you'll ever use",
            "stock": "47",
            "details_array": {
                "color": "black",
                "material": "steel"
            }
        }
    ]

    // array[x].product_id
    // array[x].product_name
    // array[x].images
    // array[x].price
    // array[x].description
    // array[x].stock
    // array[x].details_array
    return (
        <>
            <div>Browse Page Here.... hello from BrowsePage.jsx component!</div>
            <button onClick={fetchProducts}>Fetch Products</button>
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

