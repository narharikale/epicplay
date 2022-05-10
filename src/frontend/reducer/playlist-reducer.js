import { SET_PLAYLISTS, SET_SINGLE_PLAYLIST } from "../constants"

const playlistReducer = ( state ,  action ) => {
   switch(action.type){
        case SET_PLAYLISTS :
           return action.payload;
        case SET_SINGLE_PLAYLIST :
           return state.map( (playlist) =>  playlist._id === action.payload._id ? action.payload : playlist ) 
        default :
            return state ;
   }
}

export { playlistReducer }