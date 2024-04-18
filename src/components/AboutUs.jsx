import React, { useEffect, useContext } from 'react'
import { StoreContext, FetchStoresContext } from '../ContextList';
import DetailedPage from './DetailedPage';
import AboutUsFull from './AboutUsFull';
import { useNavigate } from 'react-router-dom';


import '../assets/css/homepage.css'

export default function AboutUs(){
const fetchData = useContext(FetchStoresContext);

    const [storeData, setStoreData] = useContext(StoreContext);

    console.log(storeData)
    useEffect(() => {
        
        fetchData(storeData[0])
        
    }, []);
    
    return (
        <div className="home-page-container">
          {storeData[0] === -1 ? <AboutUsFull /> : <DetailedPage />}
        </div>
    )
}
