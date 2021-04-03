import React from 'react'
const Card = (props) => {
    return (
        <div className="card">
            <div className="card_img">
                <img src={props.img} alt="programImg"/>
            </div>
            <div className="card_name">
                {props.name} #{props.fno}
            </div>
            <div className="card_missions">
                <div className="card_subhead">Mission Ids:</div>
                <ul>
                    {
                        props.mid && props.mid.map((m,index)=>{
                            return <li key={index}>{m}</li>
                        })
                    }
                </ul>
            </div>
            <div className="card_sub">
            <div className="card_subhead">Launch year:</div>
            <div className="card_ans">{props.lyear}</div>
            </div>
            <div className="card_sub">
            <div className="card_subhead">Successful Launch:</div>
            <div className="card_ans">{
                (props.slaunch)? 'true' :'false'
            }
            </div>
            </div>
            <div className="card_sub">
            <div className="card_subhead">Successful Landing:</div>
            <div className="card_ans">{
                (props.sland)? 'true' :(props.sland===null)?'null': 'false'
            }</div>
            </div>
            
        </div>
    )
}

export default Card
