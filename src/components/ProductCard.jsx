import { useContext, useState } from "react"

import { CartItemDataContext, StoreContext, FetchStoresContext, RetrieveCartItemData} from "../ContextList"

export default function ProductCard({ product, bestseller}) {
    const [cartItemData, setCartItemData] = useContext(CartItemDataContext)
    const [storeData, setStoreData] = useContext(StoreContext)
    const fetchStores = useContext(FetchStoresContext)
    const retrieveCartItemData = useContext(RetrieveCartItemData)
    function addToCart(event) {
        // console.log(event)
        // console.log(event.target)
        // console.log("You clicked " + event.target.getAttribute('product_id'))
        if (!localStorage.getItem('CartLocalStorage')) {
            localStorage.setItem('CartLocalStorage', [event.target.getAttribute('product_id')])
        } else if (localStorage.getItem('CartLocalStorage').length > 0) {
            localStorage.setItem('CartLocalStorage', [localStorage.getItem('CartLocalStorage'), event.target.getAttribute('product_id')])
        }
        
        // cartItemData[0](localStorage.getItem('CartLocalStorage').split(","))
        // console.log(useCartContext[0])
        retrieveCartItemData()
        console.log(localStorage.getItem('CartLocalStorage').split(","))
    }
    function removeFromCart(event) {
        if (localStorage.getItem('CartLocalStorage') != null) {
            if (localStorage.getItem('CartLocalStorage').split(",").includes(event.target.getAttribute('product_id'))) {
                let oldcart = localStorage.getItem('CartLocalStorage').split(",")
                oldcart.splice(localStorage.getItem('CartLocalStorage').split(",").indexOf(event.target.getAttribute('product_id')), 1)
                localStorage.setItem('CartLocalStorage', oldcart)
                // cartItemData[0](localStorage.getItem('CartLocalStorage').split(","))
                retrieveCartItemData()
            }
            
            console.log(localStorage.getItem('CartLocalStorage').split(","))
        }
    }


    function checkHowManyInCart(product) {
        if (localStorage.getItem('CartLocalStorage') != null) {
            return localStorage.getItem('CartLocalStorage').split(",").filter(x => x==product.product_id).length
        }
    }
    function checkProductStockLeft(product) {
        if (localStorage.getItem('CartLocalStorage') != null) {
            return (product.stock - localStorage.getItem('CartLocalStorage').split(",").filter(x => x==product.product_id).length) 
        } else {
            return product.stock
        }
    }
    function getStoreNameForStoreID(storeID) {
        for (let i = 0; i < storeData[1].length; i++) {
            if (storeData[1][i].store_id == storeID) {
                return storeData[1][i].store_name
            }
        }
    }
    return (
        <div className='product-card'>
            {bestseller ? <p>{getStoreNameForStoreID(product.store_id)}</p> : null}
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
            <span className="stock-indicator">
             {(checkProductStockLeft(product) > 0) 
                    ? `In Stock (${checkProductStockLeft(product)})` 
                    : "Out of Stock"} 
            </span>
            <span className="add-to-cart-button-container">{checkProductStockLeft(product) > 0 && <button onClick={addToCart} className="glow-squish-button" product_id={Number(product.product_id)}>{localStorage.getItem('CartLocalStorage') != null  ?   (   
                localStorage.getItem('CartLocalStorage').split(",")?.includes(product.product_id) ? "➕" : "🛒➕"
            ): "🛒➕"}</button>}
            
            {checkHowManyInCart(product) > 0 && <button className="how-many-of-product-in-cart glow-squish-button">🛒{checkHowManyInCart(product)}</button>}
            {checkHowManyInCart(product) > 0 && <button onClick={removeFromCart} className="glow-squish-button" product_id={Number(product.product_id)}>➖</button>}
            </span>
        </div>
    )
}