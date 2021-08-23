import React, { useContext, useState } from 'react';
// import './radio.css';
import { GlobalContext } from './../ContextApi/GlobalState';
import { useHistory, useParams } from 'react-router-dom';

export default function Toss() {
    

    const { matches } = useContext(GlobalContext);
    const { id } = useParams(matches);
    const match = matches[id];
    const [batFirst, setBatFirst] = useState({})

    console.log(match);

    const handleChange = (e)=>{
        e.preventDefault();
         const {name, value } = e.target
        setBatFirst({
            // ...batFirst,
            
            [name]: value
        })
        
        console.log(batFirst)
    }


    // const handleClick = (e) => {
    // }
    // console.log(matches)
    return (
        <div>
            <div>
                <h1>TOSS</h1>
            </div>
            <div>
                {/* <form > */}
                    <input type="radio" value={match.teama} name="team" onClick={handleChange} />{match.teama}
                    <input type="radio" value={match.teamb} name="team" onClick={handleChange} />{match.teamb}
                    <button>select</button>

                {/* </form> */}
            </div>





{/* 
            <div className="wrapper">
                <input type="radio" name="team" value={match.teama} id="option-1" 
                onChange={handleChange} 
                // defaultChecked
                 />
                <input type="radio" name="team" value={match.teamb} id="option-2" 
                onChange={handleChange} 
                />
                <label htmlFor="option-1" className="option option-1">
                    <div className="dot" />
                    <span>{match.teama}</span>
                </label>
                <label htmlFor="option-2" className="option option-2">
                    <div className="dot" />
                    <span>{match.teamb}</span>
                </label>
            </div> */}



        </div>
    )
}
