import React from "react"
import Navbar from "./Components/Navbar"
import Places from "./Components/Places"
import data from "./data"

export default function App(){
    const place = data.map(item => {
       return(
           <Places
        key={item.id}   
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
           />
            ) 
    })
    
    return (
        <div>
        <Navbar/>
        <section className="places--list">
        {place}
        </section>
        </div>
        
    )
}