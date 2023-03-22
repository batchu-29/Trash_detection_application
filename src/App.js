
import React from 'react';
import {Routes,Route} from 'react-router-dom'
//import Navbar from '././components/Navbar'
import HomeNavbar from "././components/HomeNavbar"
import View from './View'
import MapContainer from '././maps/mapsgeo'
import Con from '././components/connection'
export default function App(){
    return (
        <Routes>
            <Route path='/' element={<HomeNavbar/>}>
            
            </Route>
            <Route path='view' element={<View/>}/>
            <Route path='map' element={<MapContainer/>}></Route>
            <Route path='c' element={<Con/>}></Route>
            

           
        </Routes>
    )
} 

