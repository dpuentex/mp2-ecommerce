export default function ProductCard({ product }) {
    function addToCart(event) {
        // console.log(event)
        // console.log(event.target)
        console.log("You clicked " + event.target.getAttribute('product_id'))
        if (!localStorage.getItem('CartLocalStorage')) {
            localStorage.setItem('CartLocalStorage', [event.target.getAttribute('product_id')])
        } else if (localStorage.getItem('CartLocalStorage').length > 0) {
            localStorage.setItem('CartLocalStorage', [localStorage.getItem('CartLocalStorage'), event.target.getAttribute('product_id')])
        }
        
        
    }


    return (
        <div className='product-card'>
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
            <button onClick={addToCart} className="add-to-cart" product_id={Number(product.product_id)}>🛒➕</button>
        </div>
    )
}