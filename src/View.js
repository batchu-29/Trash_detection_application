 

import React from "react"
import Navbar from "././components/Navbar"
import Card from "././components/Card"
import axios from 'axios'
import { useEffect } from 'react';

export default function View(){
    const [flightid,setFlightid]=React.useState(0);
    const[lol,setlol] = React.useState("")
    
    
   /* const cards=data.map(item=>{
        return (<Card
        img={item.main_url}
        mission={item.Mission}
        detect={item.detect}

        />)
    })
    */
   
    function handlechange(event){
        setFlightid(event.target.value);
      }

   const fetch =()=>{
    axios.get(`http://18.234.187.114:4000/image/query/${flightid}`).then((data) => 
        {console.log(data);
            const cards= data.data.map(item =>

                <Card
                    img={item.main_url}
                    detect={item.detect}
                    date={item.date}
                />
                )

                setlol(cards);
            })

   }
    
        
    useEffect(() => {
        fetch();
        
          },[])
        
       
        
       
        
   
          
    return(
        <div>
            <Navbar/>
            <div className="form" >
                <input 
                    type="text"
                    placeholder="Enter Flight Number"
                    className="form--input"
                    onChange={handlechange}
                    
                />
                
                <button 
                    className="form--button"
                    onClick={()=>fetch()}
                >
                   Enter
                </button>
            </div>
             {lol}

        </div>



    )
}
