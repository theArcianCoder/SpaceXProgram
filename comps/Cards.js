import React from 'react'
import Card from './Card';
const Cards = ({program}) => { 
    return (
        <div className="cards">
            {
                (program.length>0) ? program.map((p,index)=>{
                    return <Card sland={p.rocket.first_stage.cores[0].land_success}  slaunch={p.launch_success} lyear={p.launch_year} mid={p.mission_id} name={p.mission_name} fno={p.flight_number} img={p.links.mission_patch_small} key={index}/>
                }) : (<div className="error">No Results !..</div>)
            }
        </div>
    )
}

export default Cards
