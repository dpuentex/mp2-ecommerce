import { useContext,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext, FetchStoresContext, CategoryContext, FetchProductsContext } from "../ContextList"
import "../assets/css/detailedpage.css"

export default function DetailedPage() {
    const [storeData, setStoreData] = useContext(StoreContext)
    const [categoryContext, setCategoryContext] = useContext(CategoryContext)
    const fetchStores = useContext(FetchStoresContext)
    const navigate = useNavigate();
    let storeIndex = storeData[2]
    
    useEffect(() => {
        // fetchStores(storeData[0])
    }, [])
    // console.log(storeData)

    function toBase64(arr) {
        //arr = new Uint8Array(arr) if it's an ArrayBuffer
        return btoa(
           arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
     }
    //  console.log(storeData[1][storeIndex].image["data"])
     //`data:image/png;base64,${toBase64( selected[0].image2.data)}` from stack overflow
    return (
        <div className="detailed-page-container">

            <h2>{storeData[1][storeIndex].store_name}</h2>
            <p>{storeData[1][storeIndex].about_us}</p>
            {storeData[1][storeIndex].image ? (                // check if images exist in storeData
                <div className="store-image-container"><img src={`data:image/png;base64,${toBase64(storeData[1][storeIndex].image["data"])}`} alt="" className="store-image" /></div>
            ) : null}
            <div className="category-button-container">
                
                {storeData[1][storeIndex].primary_categories ? 
                // <h3>Categories</h3>
                storeData[1][storeIndex].primary_categories.map((category, index) => 
                <h3 className="glow-squish-button categories-button" key={index} onClick={() => {
                    setCategoryContext(category)
                    navigate('/products/')
                }}>{category}</h3>)
                : null}
            </div>
        </div>
    )

}