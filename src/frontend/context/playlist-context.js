import { createContext , useContext } from 'react' ; 


const playlistContext = createContext();


function PlaylistProvider({ children }) {

    

    return (
            <playlistContext.Provider>
                {children}
            </playlistContext.Provider>
    )
}

const usePlaylists = () =>  useContext(playlistContext)

export { PlaylistProvider , usePlaylists } ;