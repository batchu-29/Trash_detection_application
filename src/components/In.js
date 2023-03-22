import React from 'react';
export default function In(prop){
    return (
        <div className="form" >
                <input 
                    type="text"
                    placeholder="Enter Flight Number"
                    className="form--input"
                />
                
                <button 
                    className="form--button"
                    onClick={prop.click}
                    
                >
                   Enter
                </button>
            </div>
        

    )
}