import React from "react";


export default function Card(props){
    return (
        <div className="contacts">
        
            <div className="contact-card"> 
                <img src={props.img}/>
                <h3>Mission:KMIT</h3>
                <div className="info-group">
                    
                    <p>Locaton: football ground</p>
                </div>
                <div className="info-group">
                   
                    <p>Trash Detections: {props.detect}</p>
                </div>
                <div className="info-group">
                   
                    <p>Date: {props.date}</p>
                </div>
            </div>

            </div>
            
           
    )
}