 export const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MATCH':
            return {
                ...state,
                matches: [action.payload, ...state.matches]
            }

            case 'ADD_PLAYER':
            return {
                ...state,
                players: [action.payload, ...state.players]
            }

        default:
            return state;
    }
}


// export const PlayerReducer = (state, action) => {
//     switch (action.type) {
            

//         default:
//             return state;
//     }
// }