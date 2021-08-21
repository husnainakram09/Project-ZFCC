import React, { useContext } from 'react';
import { GlobalContext } from './../ContextApi/GlobalState';
import { useHistory, useParams } from 'react-router-dom';

export default function Toss() {


    const { matches } = useContext(GlobalContext);
    const {id} = useParams(matches);
    const match = matches[id];


    console.log(match);



    // const handleClick = (e) => {
    // }
    // console.log(matches)
    return (
        <div>
            <div>
                <h1>TOSS</h1>
            </div>
            <div>
                <form >
                    <input type="radio" value="teama" name="teama" />{match.teama}
                    <input type="radio" value="teamb" name="teamb" />{match.teamb}
                    {/* <button onClick={handleClick}>select</button> */}

                </form>
            </div>
        </div>
    )
}
