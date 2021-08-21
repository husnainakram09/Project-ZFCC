import { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";

const intialMatchData = {
    matches: []
}

const intialTeamA = {
    players: []
}



export const TeamAContext = createContext(intialTeamA);
export const GlobalContext = createContext(intialMatchData);


export const GlobalProvider = ({ children }) => {
    const [matchState, playerDispatch] = useReducer(Reducer, intialMatchData);

    function addNewMatch(match) {
        playerDispatch({
            type: 'ADD_MATCH',
            payload: match
        })

    }


    return (
        <GlobalContext.Provider value={
            {
                matches: matchState.matches,
                addNewMatch
            }
        }>
            {children}
        </GlobalContext.Provider>
    );

}


export const TeamAProvider = ({ children }) => {


    const [playerState, playerDispatch] = useReducer(Reducer, intialTeamA);

    function addPlayer(player) {
        playerDispatch({
            type:'ADD_PLAYER',
            payload: player
        })
    }


    return (
        <TeamAContext.Provider value={
            {
                
                players: playerState.players,
                addPlayer
            }
        }>
            {children}
        </TeamAContext.Provider>
    );

}