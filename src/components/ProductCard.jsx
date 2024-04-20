import { useContext, useState } from "react"

import { CartItemDataContext, StoreContext, FetchStoresContext, RetrieveCartItemData} from "../ContextList"

import {jss} from "../assets/js/jss.js"

export default function ProductCard({ product, cardType}) {
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
                console.log({storeName: storeData[1][i].store_name, i})
                return {
                    storeName: storeData[1][i].store_name,  
                    index : i
                }
            }
        }
    }
    jss.set(`.card-store-${1}`, {
        'background-color': 'rgba(200, 200, 100, .4)',
    });
    jss.set(`.card-store-${1}:hover`, {
        'background-color': 'rgba(170, 170, 80, .7)',
    });
    jss.set(`.card-store-${2}`, {
        'background-color': 'rgba(200, 200, 255, .4)',
    });
    jss.set(`.card-store-${2}:hover`, {
        'background-color': 'rgba(170, 170, 255, .7)',
    });
    jss.set(`.card-store-${3}`, {
        'background-color': 'rgba(255, 170, 170, .4)',
    });
    jss.set(`.card-store-${3}:hover`, {
        'background-color': 'rgba(255, 170, 170, .7)',
    });
    // console.log(jss.get(``))
    return (
        <div className={`product-card card-store-${product.store_id}`}>
            {cardType == "best-seller" ? <p>{getStoreNameForStoreID(product.store_id).storeName}</p> : null}
            {product.product_name ? <h1>{product.product_name}</h1> : null}
            {product.price ? <h2>{product.price}</h2> : null}
            {product.description ? <h3>{product.description}</h3> : null}
            {product.image ? <p>IMAGES.. There would be a map function here or something..</p> : null}
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