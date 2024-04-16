export default function CartItemCard({ product }) {
    console.log(product)
  return (
    <div className="product-card">
      {product.product_name ? <h1><span>{localStorage.getItem('CartLocalStorage').split(",").filter(x => x==product.product_id).length}x </span>{product.product_name}</h1> : null}
      {product.price ? <h2>{product.price}</h2> : null}
      {product.description ? <h3>{product.description}</h3> : null}
      {product.images ? (
        <p>IMAGES.. There would be a map function here or something..</p>
      ) : null}
      
    </div>
  );
}
