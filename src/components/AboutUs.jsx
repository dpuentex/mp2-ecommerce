import React, { useEffect, useContext } from 'react'
import { StoreContext, FetchStoresContext } from '../ContextList';
import DetailedPage from './DetailedPage';
import { useNavigate } from 'react-router-dom';


import '../assets/css/homepage.css'

export default function AboutUs(){
const fetchData = useContext(FetchStoresContext);
const navigate = useNavigate();

    const [data, setData] = useContext(StoreContext);

    console.log(data)
    useEffect(() => {
        
        fetchData(data[0])
        
    }, [data[0]]);
    
    return (
        <div className="home-page-container">
          <DetailedPage />
        </div>
    )
}
