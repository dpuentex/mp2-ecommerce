import React from 'react'


export default async function AboutUs(){
    //use state
    const [data, setData] = React.useState({})
    await fetch(`127.0.0.1:3001/about-us-data`)
    .then(response => response.json())
    .then(responseData => setData(responseData))
    .then(console.log(data))
    return (
        <>
            <h1>{data.data}</h1>
            <div>About Us Page Here .... hello from AboutUs.jsx component</div>
        </>
    )
}
