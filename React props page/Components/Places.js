import React from "react"

export default function Places(props) {
    
    return (
        <div className="places">
            <img src={`${props.item.imageUrl}`} className="places--image" />
            <div>       
                <img src="location-logo.png" className="places--locationlogo" />
                <span>{props.item.googleMapsUrl}</span> <span>{props.item.title}</span>              
            </div>           
            <span className="gray">{props.item.startDate}</span>
            <span className="gray">{props.item.endDate}</span>
            <p className="places--description"> {props.item.description} </p>
        </div>
    )
}
