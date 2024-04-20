import { useContext,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext, FetchStoresContext, DetectedCategoriesContext, FetchProductsContext, ProductContext, SearchContext } from "../ContextList"
import "../assets/css/detailedpage.css"
import '../assets/css/homepage.css'
import '../assets/css/aboutusfull.css'

export default function DetailedPage() {
    // set background color for store about us
    document.documentElement.style.setProperty('--col1', 'rgba(10,0,20,0.8');
    document.documentElement.style.setProperty('--col2', 'rgba(0,20,10,0.8');
    document.documentElement.style.setProperty('--col3', 'rgba(20,10,0,0.8');

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
    
    //  console.log(detectedCategories[storeData[1][storeIndex].store_id])
    //  console.log(storeData[1][storeIndex].store_id)
    return (
        (storeData[1].length > 0 && storeData[0] != -1)&& (<div className="detailed-page">

            <h2>{storeData[1][storeIndex].store_name}</h2>
            <p>{storeData[1][storeIndex].about_us}</p>
            {storeData[1][storeIndex].image ? (                // check if images exist in storeData
                <div className="store-image-container"><img src={`data:image/png;base64,${toBase64(storeData[1][storeIndex].image["data"])}`} alt="" className="store-image" /></div>
            ) : null}
            
            
        </div>)
    )

}