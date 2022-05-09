import { SET_PLAYLISTS } from "../constants"

const playlistReducer = ( state ,  action ) => {
   switch(action.type){
       case SET_PLAYLISTS :
           return action.payload
   }
}

export { playlistReducer }