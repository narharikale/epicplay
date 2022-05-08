import { createContext , useState , useContext} from "react" ;

const historyContext = createContext();

function HistoryProvider( { children }) {
    const [ historyData , setHistoryData] = useState([]);

    return (
        <historyContext.Provider value={{ historyData , setHistoryData }}>
            { children }
        </historyContext.Provider>
    )
}

const useHistory =  () => useContext(historyContext);

export { HistoryProvider , useHistory }