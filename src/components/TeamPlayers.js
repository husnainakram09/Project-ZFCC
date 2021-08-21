import React, { useState, useContext } from 'react'
import { TeamAContext } from '../ContextApi/GlobalState';
import { useHistory } from 'react-router-dom';

export default function TeamPlayers() {


    const intialPlayers = {
        Player1: "",
        Player2: "",
        Player3: "",
        Player4: "",
        Player5: "",
        Player6: "",
        Player7: "",
        Player8: "",
        Player9: "",
        Player10: "",
        Player11: ""
    }

    const { addPlayer } = useContext(TeamAContext);
    // console.log(addPlayer)
    const [playerName, setPlayerName] = useState(intialPlayers);

    const handleChange = (e) => {


        setPlayerName({
            ...playerName,


            // Trimming any whitespace
            [e.target.name]: e.target.value
        });
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(playerName)

    //     const newPlayer = {
    //         Player1: playerName.Player1,
    //         Player2: playerName.Player2,
    //         Player3: playerName.Player3,
    //         Player4: playerName.Player4,
    //         Player5: playerName.Player5,
    //         Player6: playerName.Player6,
    //         Player7: playerName.Player7,
    //         Player8: playerName.Player8,
    //         Player9: playerName.Player9,
    //         Player10: playerName.Player10,
    //         Player11: playerName.Player11,
    //     }

    //     addNewPlayer(newPlayer);
    //     History.push("/matchdetails");
    // }


    let History = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(playerName);


        const newPlayer = {
            Player1: playerName.Player1,
            Player2: playerName.Player2,
            Player3: playerName.Player3,
            Player4: playerName.Player4,
            Player5: playerName.Player5,
            Player6: playerName.Player6,
            Player7: playerName.Player7,
            Player8: playerName.Player8,
            Player9: playerName.Player9,
            Player10: playerName.Player10,
            Player11: playerName.Player11,
        }

        addPlayer(newPlayer);
        History.push("/");
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Player1</label>
                <input type="text" name="Player1" value={playerName.Player1} onChange={handleChange} /><br />
                <label>Player2</label>
                <input type="text" name="Player2" value={playerName.Player2} onChange={handleChange} /><br />
                <label>Player3</label>
                <input type="text" name="Player3" value={playerName.Player3} onChange={handleChange} /><br />
                <label>Player4</label>
                <input type="text" name="Player4" value={playerName.Player4} onChange={handleChange} /><br />
                <label>Player5</label>
                <input type="text" name="Player5" value={playerName.Player5} onChange={handleChange} /><br />
                <label>Player6</label>
                <input type="text" name="Player6" value={playerName.Player6} onChange={handleChange} /><br />
                <label>Player7</label>
                <input type="text" name="Player7" value={playerName.Player7} onChange={handleChange} /><br />
                <label>Player8</label>
                <input type="text" name="Player8" value={playerName.Player8} onChange={handleChange} /><br />
                <label>Player9</label>
                <input type="text" name="Player9" value={playerName.Player9} onChange={handleChange} /><br />
                <label>Player10</label>
                <input type="text" name="Player10" value={playerName.Player10} onChange={handleChange} /><br />
                <label>Player11</label>
                <input type="text" name="Player11" value={playerName.Player11} onChange={handleChange} /><br />
                <button type="submit">Add players</button>
            </form>
        </div>
    )
}
