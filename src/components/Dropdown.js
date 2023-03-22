import React from  'react';
export default function List(props){
    return(
    <div>
        <select>
        {
            props.mission.map(opt=><option>{opt}</option>)
        }
        </select>
    </div>)
}