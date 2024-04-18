import { useContext,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext, FetchStoresContext, CategoryContext } from "../ContextList"
import "../assets/css/detailedpage.css"

export default function DetailedPage() {
    const [storeData, setStoreData] = useContext(StoreContext)
    const [categoryContext, setCategoryContext] = useContext(CategoryContext)
    const fetchStores = useContext(FetchStoresContext)
    const navigate = useNavigate();
    let storeIndex = storeData[2]
    
    useEffect(() => {
        
        fetchStores(storeData[0])
    }, [])
    console.log(storeData)
    return (
        <div className="detailed-page-container">

            <h2>{storeData[1][storeIndex].store_name}</h2>
            <p>{storeData[1][storeIndex].about_us}</p>
            {storeData[1][storeIndex].images ? (                // check if images exist in storeData
                <p>IMAGES.. There would be a map image function here or something..</p>
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