import { createContext , useContext ,useReducer } from 'react' ; 
import { playlistReducer } from '../reducers/playlistReducer';

const playlistContext = createContext();

function PlaylistProvider({ children }) {

    const [ playlistState , playlistDispatch ] = useReducer(playlistReducer , [])
    return (
            <playlistContext.Provider value={{playlistState , playlistDispatch }}>
                {children}
            </playlistContext.Provider>
    )
}

const usePlaylists = () =>  useContext(playlistContext)

export { PlaylistProvider , usePlaylists } ;