import { createContext , useState , useContext} from "react" ;

const watchLaterContext = createContext();

function WatchLaterProvider( { children }) {
    const [ watchLaterData , setWatchLaterData] = useState([]);

    return (
        <watchLaterContext.Provider value={{ watchLaterData , setWatchLaterData }}>
            { children }
        </watchLaterContext.Provider>
    )
}

const useWatchLater =  () => useContext(watchLaterContext)

export { WatchLaterProvider  , useWatchLater }