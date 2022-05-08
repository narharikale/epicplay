import { createContext , useContext , useState} from "react" ;

const likesContext = createContext();

function LikesProvider( { children }) {
    
    const [ likesData , setLikesData ] = useState([]);

    return (
        <likesContext.Provider value={{ likesData , setLikesData }}>
            { children }
        </likesContext.Provider>
    )
}

const useLikes =  () => useContext(likesContext);

export { LikesProvider  , useLikes }