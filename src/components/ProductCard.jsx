import { useContext, useState } from "react"

import { CartContext } from "../contexts/CartContext"

export default function ProductCard({ product }) {
    const useCartContext = useContext(CartContext)
    function addToCart(event) {
        // console.log(event)
        // console.log(event.target)
        console.log("You clicked " + event.target.getAttribute('product_id'))
        if (!localStorage.getItem('CartLocalStorage')) {
            localStorage.setItem('CartLocalStorage', [event.target.getAttribute('product_id')])
        } else if (localStorage.getItem('CartLocalStorage').length > 0) {
            localStorage.setItem('CartLocalStorage', [localStorage.getItem('CartLocalStorage'), event.target.getAttribute('product_id')])
        }
        
        useCartContext[1](localStorage.getItem('CartLocalStorage').split(","))
        console.log(useCartContext[0])
        console.log(localStorage.getItem('CartLocalStorage').split(","))
    }

    //useCartContext[1](localStorage.getItem('CartLocalStorage').split(","))
    return (
        <div className='product-card'>
            {product.product_name ? <h1>{product.product_name}</h1> : null}
            {product.price ? <h2>{product.price}</h2> : null}
            {product.description ? <h3>{product.description}</h3> : null}
            {product.images ? <p>IMAGES.. There would be a map function here or something..</p> : null}
            {product.details_object
                ? 
                    <ul className="product-details">
                        {
                            Object.keys(product.details_object)
                            .map((key, index) => {
                                return (
                                    <li key={index}>{key}: {
                                        product.details_object[key] ? 
                                            <span>{product.details_object[key]}</span> 
                                        : null}
                                    </li>
                                    )
                                
                                }
                            )    
                        }
                    </ul>
                : null
            }
            <button onClick={addToCart} className="glow-squish-button" product_id={Number(product.product_id)}>{
                localStorage.getItem('CartLocalStorage').split(",")?.includes(product.product_id) ? "✅" + localStorage.getItem('CartLocalStorage').split(",").filter(x => x==product.product_id).length : "🛒➕"
            }</button>
        </div>
    )
}