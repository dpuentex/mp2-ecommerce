import { useContext, useEffect, useState } from "react"

import { CartItemDataContext, StoreContext, FetchStoresContext, RetrieveCartItemData} from "../ContextList"

import {jss} from "../assets/js/jss.js"

import "../assets/css/admin.css"

export default function ProductCard({ product, showStore, bestsellerData, admin}) {

    const [POSTObject, setPOSTObject] = useState({})
    const [putObject, setPutObject] = useState({})

    function updateProduct(product_id, putObject){
        fetch(`https://7rwcnp46mg.execute-api.us-west-2.amazonaws.com/staging/products/update/${product_id}`, {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          
            //make sure to serialize your JSON body
            body: JSON.stringify(putObject)
          })
          .then( (response) => { 
             console.log(response)
          });
    }


    useEffect(() => {
        console.log(putObject)
    }, [putObject])
    const [cartItemData, setCartItemData] = useContext(CartItemDataContext)
    const [storeData, setStoreData] = useContext(StoreContext)
    const fetchStores = useContext(FetchStoresContext)
    const retrieveCartItemData = useContext(RetrieveCartItemData)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [confirmUpdate, setConfirmUpdate] = useState(false)
    function addToCart(event) {
        // console.log(event)
        // console.log(event.target)
        // console.log("You clicked " + event.target.getAttribute('product_id'))
        if (!localStorage.getItem('CartLocalStorage')) {
            localStorage.setItem('CartLocalStorage', [product.product_id])
        } else if (localStorage.getItem('CartLocalStorage').length > 0) {
            localStorage.setItem('CartLocalStorage', [localStorage.getItem('CartLocalStorage'), product.product_id])
        }
        
        // cartItemData[0](localStorage.getItem('CartLocalStorage').split(","))
        // console.log(useCartContext[0])
        retrieveCartItemData()
        console.log(localStorage.getItem('CartLocalStorage').split(","))
    }
    function removeFromCart(event) {
        if (localStorage.getItem('CartLocalStorage') != null) {
            if (localStorage.getItem('CartLocalStorage').split(",").includes(product.product_id)) {
                let oldcart = localStorage.getItem('CartLocalStorage').split(",")
                oldcart.splice(localStorage.getItem('CartLocalStorage').split(",").indexOf(product.product_id), 1)
                localStorage.setItem('CartLocalStorage', oldcart)
                // cartItemData[0](localStorage.getItem('CartLocalStorage').split(","))
                retrieveCartItemData()
            }
            
            console.log(localStorage.getItem('CartLocalStorage').split(","))
        }
    }

    function removeAllOneItemFromCart(event) {
        if (localStorage.getItem('CartLocalStorage') != null) {
            if (localStorage.getItem('CartLocalStorage').split(",").includes(product.product_id)) {
                let oldcart = localStorage.getItem('CartLocalStorage').split(",")
                while (oldcart.includes(product.product_id)) {
                    oldcart.splice(localStorage.getItem('CartLocalStorage').split(",").indexOf(product.product_id), 1)
                }
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
                // console.log({storeName: storeData[1][i].store_name, i})
                return {
                    storeName: storeData[1][i].store_name,  
                    index : i
                }
            }
        }
    }
   

    useEffect(() => {
        // console.log(storeData)
        if(storeData[1].length > 0) {
            storeData[1].forEach((store) => {
                // console.log(store)
                jss.set(`.card-store-${store.store_id}`, {
                'background-color': store.style.cardStyle["background-color"],
                });
                jss.set(`.card-store-${store.store_id}:hover`, {
                    'background-color': store.style.cardStyleHover["background-color"],
                });
            })
            
        }
    }, [storeData, bestsellerData, null])
    return (
        <div className={`product-card card-store-${product.store_id}`}>
            {showStore == true && <p className="product-store-name">{getStoreNameForStoreID(product.store_id).storeName}</p>}
            {admin && <span>product_id:<input type="number" onChange={(e) => setPutObject({...putObject, product_id: e.target.value})} className="product-id admin-input" defaultValue={product.product_id} disabled={true}/></span>}
            {admin && <span>store_id:<input type="number" onChange={(e) => setPutObject({...putObject, store_id: e.target.value})} className="store-id admin-input" defaultValue={product.store_id}/></span>}
            {admin && <span>best_seller:<input type="checkbox" onChange={(e) => setPutObject({...putObject, best_seller: e.target.checked})} className="product-bestseller admin-input" defaultValue={product.best_seller}/></span>}
            {product.product_name && (!admin 
                ? <h1>{product.product_name}</h1> 
                : <span>product_name:<input   onChange={(e) => setPutObject({...putObject, product_name: e.target.value})} className="product-name admin-input" defaultValue={product.product_name}/></span>)}
            {product.price && (!admin 
                ? <h2>{product.price}</h2>
                : <span>price:<input type ="number" onChange={(e) => setPutObject({...putObject, price: e.target.value})} className="product-price admin-input" defaultValue={product.price}/></span>)}
            {product.description && (!admin 
                ? <h3>{product.description}</h3>
                : <span>description:<textarea onChange={(e) => setPutObject({...putObject, description: e.target.value})} className="product-description admin-input" defaultValue={product.description}/></span>)}
            {product.image && <p>IMAGES.. There would be a map function here or something..</p>}
            {product.details_object && (!admin 
                ? <ul className="product-details">
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
                : <span>details_object:<textarea onChange={(e) => setPutObject({...putObject, details_object: JSON.parse(e.target.value)})} className="product-details-input admin-input" defaultValue={JSON.stringify(product.details_object, null, " ")} rows={Object.keys(product.details_object).length + 2}/></span>
            )}
            {!admin ? <span className="stock-indicator">
             {(checkProductStockLeft(product) > 0) 
                    ? `In Stock (${checkProductStockLeft(product)})` 
                    : "Out of Stock"} 
            </span> : <span className="product-stock-label">stock:<input type="number" onChange={(e) => setPutObject({...putObject, stock: e.target.value})} className="product-stock admin-input" defaultValue={(checkProductStockLeft(product))}/></span>}

            {admin && <button
            className="glow-squish-button"
            onClick={(e) => {
                if (confirmUpdate){
                    updateProduct(product.product_id, putObject);
                    setConfirmUpdate(false)
                } else if (!confirmUpdate) {
                  setConfirmUpdate(true)
                }
                e.stopPropagation()
              }}
              onMouseLeave={() => setConfirmUpdate(false)}
            >{confirmUpdate 
                ? "actually?" 
                : "Update"}</button>}

            {!admin && <span className="add-to-cart-button-container">{checkProductStockLeft(product) > 0 &&
            
            <button onClick={addToCart} className="glow-squish-button" >{localStorage.getItem('CartLocalStorage') != null  ?   (   
                localStorage.getItem('CartLocalStorage').split(",")?.includes(product.product_id) ? "➕" : "🛒➕"
            ): "🛒➕"}</button>}
            
            {checkHowManyInCart(product) > 0 &&
            
            <button className="how-many-of-product-in-cart glow-squish-button">🛒{checkHowManyInCart(product)}</button>}
            {checkHowManyInCart(product) > 0 &&
            
            <button onClick={(e)=>{removeFromCart(); e.stopPropagation()} } className="glow-squish-button remove-one" >➖
            <div className="glow-squish-button remove-all" 
            onClick={(e) => {
                if (confirmDelete){
                    removeAllOneItemFromCart();
                    setConfirmDelete(false)
                } else if (!confirmDelete) {
                  setConfirmDelete(true)
                }
                e.stopPropagation()
              }}
              onMouseLeave={() => setConfirmDelete(false)}
            >{confirmDelete 
                ? "actually?" 
                : "remove all"}</div>
            </button>}
            </span>}
        </div>
    )
}