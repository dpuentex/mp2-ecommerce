import React, { useEffect } from 'react'



export default function AboutUs(){
    //use state
    let [data, setData] = React.useState({})



    

    async function fetchFirst() {
        
        const response = await fetch(
            `http://127.0.0.1:${3000}/store-data`
        )
        let data = await response.json()
        setData(data[0]) 
        console.log(data)
    }
       

    async function fetchSecond() {
        await fetch(
            `http://127.0.0.1:${3000}/store-data`
        ).then((response) => response.json()
        ).then((responseData) => setData(responseData[1]))
        console.log(data)
    }

    return (
        <>
        
            <h1>{data?.store_name ? data.store_name : 'no data'}</h1>
            <h2>{data?.about_us ? data.about_us : 'no data'}</h2>
            <div>About Us Page Here .... hello from AboutUs.jsx component</div>
            <button onClick={fetchFirst}>fetch store 0</button>
            
            <button onClick={fetchSecond}>fetch store 1</button>
        </>
    )
}
