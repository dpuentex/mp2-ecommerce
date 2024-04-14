import React, { useEffect, useContext } from 'react'
import { StoreContext } from '../ContextList';
import DetailedPage from './DetailedPage';

import '../assets/css/homepage.css'

export default function AboutUs(){

    const [data, setData] = useContext(StoreContext);
    
    useEffect(() => {
        fetch(`http://127.0.0.1:${3000}/store/${data[0]}`)
            .then((res) => res.json())
            .then((json) => setData([data[0], json]));
    }, [data[0]]);

    return (
        <div className="home-page-container">
          <DetailedPage />
        </div>
    )
}
