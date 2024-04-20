import { useEffect, useState, useContext } from "react";
import '../assets/css/bestsellers.css'
import "../assets/css/homepage.css";
import "../assets/css/detailedpage.css"
import ProductCard from "./ProductCard";
import { FetchStoresContext, StoreContext, ProductContext } from "../ContextList";
import {jss} from "../assets/js/jss.js"

export default function BestSellers() {


  function randomFace() {
    const messages = ["^.^", "UwU", "OwO", "O.O"];
    return messages[Math.floor(Math.random() * messages.length)];
  }
  // reset background color for best sellers
  document.documentElement.style.setProperty('--col1', 'rgba(40,0,0,0.8');
  document.documentElement.style.setProperty('--col2', 'rgba(20,20,0,0.8');
  document.documentElement.style.setProperty('--col3', 'rgba(40,40,40,0.8');

  const [bestsellerData, setBestsellerData] = useState([]);
  const [storeData, setStoreData] = useContext(StoreContext);
    const fetchStores = useContext(FetchStoresContext);
    const [productData, setProductData] = useContext(ProductContext);


  useEffect(() => {
    console.log(productData)
    let bestsellerArray = [];
    if(productData.length > 0) {
      productData.forEach(product => {
        if (product.best_seller)  {
          bestsellerArray.push(product);
        }
      })
    }

    setBestsellerData(bestsellerArray);
  }, [productData]);

  
//   jss.set(`.card-store-${1}`, {
//     'font-size': '15px',
//     'color': 'red'
// }); // this is local to this document
  return (
    <div className={`best-sellers-page`}>
      
      <h1>🔥Hottest Products🔥</h1> 
      {storeData[1].length == 0 && (
        <div className="loading">
          Please wait... Fetching stores. {randomFace()}
        </div>
      )}
      {productData.length == 0 && (
        <div className="loading">
          Please wait... Fetching products. {randomFace()}
        </div>
      )}
      {bestsellerData.length > 0 && storeData[1].length > 0 ? (
        <div className="best-sellers-container">
          {bestsellerData.map((product, index) => {
            return <ProductCard key={index} product={product} showStore={true} bestSellerData={bestsellerData}/>;
          })}
        </div>
      ) : null}
    </div>
  );
}
