import "../assets/css/cartpanel.css"
import { useContext, useEffect,useState } from "react";
import React from "react";
import { CartItemDataContext, ProductContext, RetrieveCartItemData } from "../ContextList";



export default function CartPanel() {
    const [cartItemData, setCartItemData] = useContext(CartItemDataContext)
    const [productData, setProductData] = useContext(ProductContext)
    const retrieveCartItemData = useContext(RetrieveCartItemData)
    const [subtotal, setSubtotal] = useState(0)
    
    console.log(cartItemData)

    function calculateSubtotal() {
        console.log(cartItemData[0])

        let calculatedSubtotal = 0
        cartItemData[0]?.length > 0 && (
            cartItemData[0].forEach((product) => {
                calculatedSubtotal = (calculatedSubtotal - -(product.price)).toFixed(2)
            })
        )
                setSubtotal(calculatedSubtotal)
    }
    useEffect(() => {
        
        // calculateSubtotal()
        console.log("CartPanel productdata useEffect")
        retrieveCartItemData()
        console.log(cartItemData)

    }, [ productData, null])

    useEffect(() => {
        console.log("CartPanel cartItemData useEffect")
        calculateSubtotal()
    }, [cartItemData])
  
    return (
        <div id="cart-panel" className="cart-panel-container">
            
            {cartItemData[0]?.length > 0 && cartItemData[1].map((product, index) => {
                    return <div className="product-card cart-panel-item" key={index}>
                    {product.product_name ? <h1><span>{localStorage.getItem('CartLocalStorage').split(",").filter(x => x==product.product_id).length}x </span>{product.product_name}</h1> : null}
                    {product.price ? <span className="cart-panel-item-product-price-container"><h2>{product.price}</h2><h2>{(product.price * localStorage.getItem('CartLocalStorage').split(",").filter(x => x==product.product_id).length).toFixed(2)}</h2></span> : null}
                    {product.images ? (
                      <p className="cart-panel-item-product-images">IMAGES.. There would be a map function here or something..</p>
                    ) : null} 
                    </div>
                    })
           }        
        </div>
    )
}
