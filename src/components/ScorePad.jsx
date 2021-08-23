import React, { useState } from "react";

export default function ScorePad() {
    const strikerBatsman = {
        name: "Player1",
        runs: 0,
        balls: 0,
        fours: 0,
        sixes: 0,
        sr: 0,
    };
    const nonStrikerBatsman = {
        name: "Player2",
        runs: 0,
        balls: 0,
        fours: 0,
        sixes: 0,
        sr: 0,
    };

    const [score, setScore] = useState(0);
    const [out, setOut] = useState(0);
    const [over, setOver] = useState(0);
    const [bowl, setBowl] = useState(0);
    const [striker, setStriker] = useState(strikerBatsman.name);
    const [nonStriker, setNonStriker] = useState(nonStrikerBatsman.name);
    const [strikerRuns, setStrikerRuns] = useState(strikerBatsman.runs);
    const [nonStrikerRuns, setNonStrikerRuns] = useState(nonStrikerBatsman.runs);
    const [strikerBalls, setStrikerBalls] = useState(strikerBatsman.balls);
    const [nonStrikerBalls, setNonStrikerBalls] = useState(nonStrikerBatsman.balls);
    const [strikerFours, setStrikerFours] = useState(strikerBatsman.fours);
    const [nonStrikerFours, setNonStrikerFours] = useState(nonStrikerBatsman.fours);
    const [strikerSixes, setStrikerSixes] = useState(strikerBatsman.sixes);
    const [nonStrikersixes, setNonStrikerSixes] = useState(nonStrikerBatsman.sixes);
    const [strikerSR, setStrikerSR] = useState(strikerBatsman.sr);
    const [nonStrikerSR, setNonStrikerSR] = useState(nonStrikerBatsman.sr);

    const handleStriker = (e) => {
        e.preventDefault();

        console.log(striker, strikerRuns);

        if (striker && strikerRuns) {
            return (
                setStriker(nonStriker),
                setNonStriker(striker),

                setStrikerRuns(nonStrikerRuns),
                setNonStrikerRuns(strikerRuns),

                setStrikerBalls(nonStrikerBalls),
                setNonStrikerBalls(strikerBalls),

                setStrikerFours(nonStrikerFours),
                setNonStrikerFours(strikerFours),

                setStrikerSixes(nonStrikersixes),
                setNonStrikerSixes(strikerSixes),

                setStrikerSR(nonStrikerSR),
                setNonStrikerSR(strikerSR)
            );

        } else if (nonStriker && nonStrikerRuns) {
            return (
                setStriker(striker),
                setNonStriker(nonStriker),

                setStrikerRuns(strikerRuns),
                setNonStrikerRuns(nonStrikerRuns),

                setStrikerBalls(strikerBalls),
                setNonStrikerBalls(nonStrikerBalls),

                setStrikerFours(strikerFours),
                setNonStrikerFours(nonStrikerFours),

                setStrikerSixes(strikerSixes),
                setNonStrikerSixes(nonStrikersixes),

                setStrikerSR(strikerSR),
                setNonStrikerSR(nonStrikerSR)
            );

        }
    };

    const handleClick = (e) => {
        e.preventDefault();

        setScore(score + parseInt(e.target.value));

        setBowl(bowl + 1);

        setStrikerRuns(strikerRuns + parseInt(e.target.value));
        setStrikerBalls(strikerBalls + 1);
        const sr = (strikerRuns / strikerBalls) * 100
        setStrikerSR(
            sr.toFixed(2)
        )

        if ((bowl === 5) && (parseInt(e.target.value) === 4)) {
            return (
                setOver(over + 1), setBowl(0),
                setStrikerFours(strikerFours + 1)
                );
        }else if((bowl === 5) && (parseInt(e.target.value) === 6)){
            return(
                setOver(over + 1), setBowl(0),
                setStrikerSixes(strikerSixes + 1)
            )
        }else if (bowl=== 5){
            return(
                setOver(over + 1), setBowl(0)
            );
        }
        if (parseInt(e.target.value) === 4) {
            return (setStrikerFours(strikerFours + 1));
        } else if (parseInt(e.target.value) === 6) {
            return (setStrikerSixes(strikerSixes + 1));
        }
    };

    const handleOut = (e) => {
        e.preventDefault();
        setOut(out + parseInt(e.target.value));
        setBowl(bowl + 1);
        if (bowl=== 5){
            return(
                setOver(over + 1), setBowl(0)
            );
        }

    };

    return (
        <div>
            <div className="head-div">
                <h2>Team A vs Team B</h2>
                <h2>First Innings</h2>
            </div>
            <div className="team-score">
                <h4>Team A</h4>
                <h3>
                    {score}/{out}
                </h3>
                <h3>
                    {over}.{bowl} Overs
                </h3>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Batting</td>
                            <td id="Runs">R</td>
                            <td id="Balls">B</td>
                            <td id="4S">4s</td>
                            <td id="6s">6s</td>
                            <td id="S/R">S/R</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{striker}</td>
                            <td>{strikerRuns}</td>
                            <td id="Balls">{strikerBalls}</td>
                            <td id="4S">{strikerFours}</td>
                            <td id="6s">{strikerSixes}</td>
                            <td id="S/R">{strikerSR}</td>
                        </tr>
                        <tr>
                            <td>{nonStriker}</td>
                            <td>{nonStrikerRuns}</td>
                            <td id="Balls">{nonStrikerBalls}</td>
                            <td id="4S">{nonStrikerFours}</td>
                            <td id="6s">{nonStrikersixes}</td>
                            <td id="S/R">{nonStrikerSR}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={handleStriker}>SwapStriker</button>
            </div>

            <div>
                <div>
                    <button>Special Cases</button>
                </div>
                <div>
                    <button value="1" onClick={handleClick}>
                        NB
                    </button>
                    <button value="1" onClick={handleClick}>
                        WD
                    </button>
                    <button value="1" onClick={handleClick}>
                        LB
                    </button>
                    <button value="1" onClick={handleClick}>
                        B
                    </button>
                    <button value="0" onClick={handleClick}>
                        0
                    </button>
                    <button value="1" onClick={handleClick}>
                        1
                    </button>
                    <button value="2" onClick={handleClick}>
                        2
                    </button>
                    <button value="3" onClick={handleClick}>
                        3
                    </button>
                    <button value="4" onClick={handleClick}>
                        4
                    </button>
                    <button value="5" onClick={handleClick}>
                        5
                    </button>
                    <button value="6" onClick={handleClick}>
                        6
                    </button>
                    <button value="0" onClick={handleClick}>
                        UNDO
                    </button>
                    <button>OVERTHROW</button>
                    <button value="1" onClick={handleOut}>
                        OUT
                    </button>
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    );
}
