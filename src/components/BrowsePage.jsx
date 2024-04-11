import React from 'react'
import '../assets/css/browsepage.css'

export default function BrowsePage() {

    let [data, setData] = React.useState({})

    async function fetchProducts() {
      const response = await fetch("http://127.0.0.1:3001/products/products-data");
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
                                <div key={index} className='product-card'>
                                    {product.product_name ? <h1>{product.product_name}</h1> : null}
                                    {product.price ? <h2>{product.price}</h2> : null}
                                    {product.description ? <h3>{product.description}</h3> : null}
                                    {product.images ? <p>IMAGES.. There would be a map function here or something..</p> : null}
                                    {product.details_array
                                        ? 
                                            <div>
                                                {
                                                    Object.keys(product.details_array)
                                                    .map((key, index) => {
                                                        return (
                                                            <div className='product-details' key={index}>
                                                                <p>{key}{product.details_array[key] ? <span>{product.details_array[key]}</span> : null}</p>
                                                                
                                                            </div>
                                                                )
                                                        
                                                        }
                                                    )    
                                                }
                                            </div>
                                        : null
                                    }
                                </div>
                            )
                        })
                        }</div>
                : 
                    null
                }
        </> 
    )
}

