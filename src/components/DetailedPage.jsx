import { useContext,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext, FetchStoresContext, DetectedCategoriesContext, FetchProductsContext, ProductContext, SearchContext } from "../ContextList"
import "../assets/css/detailedpage.css"

export default function DetailedPage() {
    const [storeData, setStoreData] = useContext(StoreContext)
    const [detectedCategories, setDetectedCategories] = useContext(DetectedCategoriesContext)
    const [productData, setProductData] = useContext(ProductContext)
    const fetchStores = useContext(FetchStoresContext)
    const navigate = useNavigate();
    let storeIndex = storeData[2]
    const {setSearch : {setCategory}} = useContext(SearchContext)
    

    // console.log(storeData)

    function toBase64(arr) {
        //arr = new Uint8Array(arr) if it's an ArrayBuffer
        return btoa(
           arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
     }
    
     console.log(detectedCategories[storeData[1][storeIndex].store_id])
     console.log(storeData[1][storeIndex].store_id)
    return (
        <div className="detailed-page-container">

            <h2>{storeData[1][storeIndex].store_name}</h2>
            <p>{storeData[1][storeIndex].about_us}</p>
            {storeData[1][storeIndex].image ? (                // check if images exist in storeData
                <div className="store-image-container"><img src={`data:image/png;base64,${toBase64(storeData[1][storeIndex].image["data"])}`} alt="" className="store-image" /></div>
            ) : null}
            <div className="category-button-container">
                
                {/* {storeData[1][storeIndex].primary_categories ? 
                // <h3>Categories</h3>
                storeData[1][storeIndex].primary_categories.map((category, index) => 
                <h3 className="glow-squish-button categories-button" key={index} onClick={() => {
                    setCategoryContext(category)
                    navigate('/products/')
                }}>{category}</h3>)
                : null} */}
                {detectedCategories[storeData[1][storeIndex].store_id] ? 
                // <h3>Categories</h3>
                detectedCategories[storeData[1][storeIndex].store_id].map((category, index) => 
                <h3 className="glow-squish-button categories-button" key={index} onClick={() => {
                    // setCategory(category)
                    navigate('/products/')
                }}>{category}</h3>)
                : null}
            </div>
        </div>
    )

}