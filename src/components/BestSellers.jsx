import { useEffect, useState, useContext } from "react";
import '../assets/css/bestsellers.css'
import ProductCard from "./ProductCard";
import { FetchStoresContext, StoreContext } from "../ContextList";
import {jss} from "../assets/js/jss.js"

export default function BestSellers() {
  // reset background color for best sellers
  document.documentElement.style.setProperty('--col1', 'rgba(40,0,0,0.8');
  document.documentElement.style.setProperty('--col2', 'rgba(20,20,0,0.8');
  document.documentElement.style.setProperty('--col3', 'rgba(40,40,40,0.8');

  const [bestsellerData, setBestsellerData] = useState([]);
  const [storeData, setStoreData] = useContext(StoreContext);
    const fetchStores = useContext(FetchStoresContext);
  async function fetchProducts() {
    let data;
    const response = await fetch(`https://7rwcnp46mg.execute-api.us-west-2.amazonaws.com/staging/products/bestsellers` );
    data = await response.json();
    setBestsellerData(data);

    await fetchStores(storeData[0])
    
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  
//   jss.set(`.card-store-${1}`, {
//     'font-size': '15px',
//     'color': 'red'
// }); // this is local to this document
  return (
    <div className={`best-sellers-page`}>
      <h1>🔥Hottest Products🔥</h1> 
      {bestsellerData.length > 0 && storeData[1].length > 0 ? (
        <div className="best-sellers-container">
          {bestsellerData.map((product, index) => {
            return <ProductCard key={index} product={product} cardType={"best-seller"} bestSellerData={bestsellerData}/>;
          })}
        </div>
      ) : null}
    </div>
  );
}
