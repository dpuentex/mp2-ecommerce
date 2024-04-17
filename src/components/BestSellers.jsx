import { useEffect, useState, useContext } from "react";
import '../assets/css/bestsellers.css'
import ProductCard from "./ProductCard";
import { FetchStoresContext, StoreContext } from "../ContextList";

export default function BestSellers() {
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

  return (
    <div className="best-sellers-container">
      {bestsellerData.length > 0 ? (
        <div className="best-sellers-container">
          {bestsellerData.map((product, index) => {
            return <ProductCard key={index} product={product} bestseller={true}/>;
          })}
        </div>
      ) : null}
    </div>
  );
}
