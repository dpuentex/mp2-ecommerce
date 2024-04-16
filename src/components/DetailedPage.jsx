import { useContext,useEffect } from "react"
import { redirect } from "react-router-dom"
import { StoreContext, FetchStoresContext } from "../ContextList"

export default function DetailedPage() {
    const [storeData, setStoreData] = useContext(StoreContext)
    const fetchStores = useContext(FetchStoresContext)

    // useEffect(() => {
    //     fetchStores(storeData[0])
    // }, [storeData[0]])
    
    return (
        <div className="detailed-page-container">

            <h2>{storeData[1].store_name}</h2>
            <p>{storeData[1].about_us}</p>
            {storeData[1].images ? (                // check if images exist in storeData
                <p>IMAGES.. There would be a map image function here or something..</p>
            ) : null}
            {storeData[1].primary_categories ? 
            storeData[1].primary_categories.map((category, index) => 
            <h3 key={index}>{category}</h3>) : null}
        </div>
    )

}