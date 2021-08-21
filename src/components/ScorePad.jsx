import React, { useState } from 'react';

export default function ScorePad() {


    const [score, setScore] = useState(0);
    const [out, setOut] = useState(0);
    const [over, setOver] = useState(0);
    const [bowl, setBowl] = useState(0);

    const handleClick = (e) => {
        e.preventDefault();
        // const addScore = e.target.value
        // var oldScore = score;
        // var newScore = e.target.value;

        // setScore(
        //    parseInt( score + newScore)
        // )


        setScore(
            score + parseInt(e.target.value)
        )

        setBowl(
            bowl + 1
        )
        if (bowl == 5) {
            return (
                setOver(
                    over + 1
                ),
                setBowl(0)
            );
        }

    }
    const handleOut = (e) => {
        e.preventDefault();
        setOut(
            out + parseInt(e.target.value)
        )
    }

    return (
        <div>
            <div className="head-div">
                <h2>Team A vs Team B</h2>
                <h2>First Innings</h2>
            </div>
            <div className="team-score">
                <h4>Team A</h4>
                <h3>{score}/{out}</h3>
                <h3>{over}.{bowl} Overs</h3>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Batting</td>
                            <td>R</td>
                            <td>B</td>
                            <td>4s</td>
                            <td>6s</td>
                            <td>S/R</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>Player 1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr >
                            <td>Player 2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div>
                <div>
                    <button>Special Cases</button>

                </div>
                <div>
                    <button value="1" onClick={handleClick}>NB</button>
                    <button value="1" onClick={handleClick}>WD</button>
                    <button value="1" onClick={handleClick}>LB</button>
                    <button value="1" onClick={handleClick}>B</button>
                    <button value="0" onClick={handleClick}>0</button>
                    <button value="1" onClick={handleClick}>1</button>
                    <button value="2" onClick={handleClick}>2</button>
                    <button value="3" onClick={handleClick}>3</button>
                    <button value="4" onClick={handleClick}>4</button>
                    <button value="5" onClick={handleClick}>5</button>
                    <button value="6" onClick={handleClick}>6</button>
                    <button value="0" onClick={handleClick}> UNDO</button>
                    <button>OVERTHROW</button>
                    <button value="1" onClick={handleOut}>OUT</button>
                    <button>SUBMIT</button>

                </div>
            </div>
        </div>
    )
}
