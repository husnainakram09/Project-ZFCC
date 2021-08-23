import React, { useContext } from 'react';
import './style.css'
import {useHistory} from 'react-router-dom';
import { GlobalContext } from '../ContextApi/GlobalState';
// import Toss from './Toss';
import PopUp from './PopUp';

function MatchSchedule() {

    const { matches } = useContext(GlobalContext);
    let History = useHistory();



    // const openPopup =()=>{
    //     <PopUp />
    // }
    return (
        <div>
            <h1>Welcome to zfcc scoring pad</h1>
            <div className="AllMatches">
                {matches.map((v, i) => {
                    // const match = matches[i]
                    return (
                        <div key={i} className="matchDetail">

                            <h4>{v.match}</h4>
                            <h4>{v.matchdate}</h4>
                            <h4>{v.teama}vs{v.teamb}</h4>
                            <button onClick={()=>{History.push(`/toss/${i}`)}}>Start Match</button>
                        </div>
                    )
                })}
            </div>
            <button
                type="button"
                onClick={
                    () => { History.push("/matchdetails") }
                }>
                Match Details
            </button>

            {/* <button onClick={openPopup}>popup</button> */}
            <PopUp/>



            {/* <Toss /> */}
        </div>
    )
}
export default MatchSchedule;