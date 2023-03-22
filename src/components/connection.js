import React,{Component, useEffect} from "react";
import {w3cwebsocket as W3CWebSocket} from 'websocket'
import axios from 'axios'
import { useState } from 'react';
import List from '././Dropdown'

const client =new W3CWebSocket('ws://127.0.0.1:3001/socket/command?device=phone');
 
export default function Con(){
  let mission=[];
  const [vall,setVal]=React.useState("");
  const [opts,setOpts]=React.useState([]);
  const [d,setDd]=React.useState();
        client.onopen=()=>{
            console.log('connected');

        };
        
        function onButtonClicked(){
          console.log("launched")
            client.send(JSON.stringify({
                type:"message",
                message:"can_launch"
            })) 
        }
        
       
      
 useEffect(()=>{
          axios.get(`http://18.234.187.114:4000/mission/query/all`).then((data)=>{
           
           setDd(data.data);
           //console.log(d)
           //console.log(d[0].waypoints)
           //console.log(d.length)
           //console.log(vall)
           
           
           
           mission=data.data.map(obj=>obj.name);
           setOpts(mission)
           
            
          })
         
},[])
client.onmessage=(msg)=>{
  console.log(msg)
  const m=JSON.parse(msg.data)
  
  
  if(m.reply===false){
    console.log(vall);
    console.log(m.reply)
    client.close();
    client.onclose = () => {
      console.log("connection closed");
      
    };
  }
  else if(m.reply===true){
    let w;
    console.log(d[0].waypoints)
    console.log(vall);
    console.log(d);

    for(let i=0;i<d.length;i++){
      
      if(d[i].name===vall){

        w=d[i].waypoints;
        
      }
      

    }
    //w=d[0].waypoints;
    console.log(w);
    
    
    
    client.send(JSON.stringify({
      
      message:"LAUNCH",
      waypoints:w,
      id:d[0]._id
  })) 

   /* client.close();
    client.onclose = () => {
      console.log("connection closed");
      
    };
*/
  }
}
 
const change=(event)=>{
  
  
  const vall=event.target.value
  setVal(event.target.value);
  console.log(vall)

}

        
       
        

 
    return (
      
        
        <div>

          <div className="bg2">
            <div className="extra-top"></div>
           <nav>
            <img className = "nav--logo" src="././imagess/logo.png" alt="not available"/>
            <h1 className="nav--h1">Trash Detection</h1>
        </nav>
        <h1 className="h1--select">Select a mission</h1>
        
            <div className="drpdnc">
            <select className="drpdn" value={vall} onChange={(event)=>change(event)}>
              {
                opts.map(opt=><option className="opt">{opt}</option>)
              }
            </select>
            <div className="launch--div">
            <button className="launch" onClick={onButtonClicked}>Launch</button>
            </div>
            </div>
            

        </div>
        </div>
        
    )
}

/*
import React, { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://127.0.0.1:3001");

export default function Con() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    client.onopen = () => {
      console.log("connected");
      setIsConnected(true);
    };

    client.onclose = () => {
      console.log("connection closed");
      setIsConnected(false);
    };
  }, []);

  function onButtonClicked() {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          type: "message",
          msg: "can_launch",
        })
      );
    } else {
      console.log("WebSocket is not open");
    }
  }

  return (
    <div>
      {isConnected ? "Connected" : "Not Connected"}
      <button onClick={onButtonClicked}>Send Message</button>
    </div>
  );
}*/