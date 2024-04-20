export default function CartItemCard({ product }) {
    console.log(product)

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
  return (
    <div className="product-card">
      {product.product_name ? <h1><span>{localStorage.getItem('CartLocalStorage').split(",").filter(x => x==product.product_id).length}x </span>{product.product_name}</h1> : null}
      {product.price ? <h2>{product.price}</h2> : null}
      {product.description ? <h3>{product.description}</h3> : null}
      {product.images ? (
        <p>IMAGES.. There would be a map function here or something..</p>
      ) : null}
      <span className="add-to-cart-button-container">
        {checkProductStockLeft(product) > 0 && 
        <button onClick={addToCart} className="glow-squish-button" product_id={Number(product.product_id)}>{localStorage.getItem('CartLocalStorage') != null  ?   (   
                localStorage.getItem('CartLocalStorage').split(",")?.includes(product.product_id) ? "➕" : "🛒➕"
            ): "🛒➕"}</button>}
            
            {checkHowManyInCart(product) > 0 && <button className="how-many-of-product-in-cart glow-squish-button">🛒{checkHowManyInCart(product)}</button>}
            {checkHowManyInCart(product) > 0 && <button onClick={removeFromCart} className="glow-squish-button" product_id={Number(product.product_id)}>➖</button>}
            </span>
    </div>
  );
}
