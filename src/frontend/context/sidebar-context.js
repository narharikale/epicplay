import { createContext , useContext ,useState , useEffect } from 'react' ; 

const sidebarContext = createContext();

function SidebarProvider({ children }) {

    const [ sidebarDisplay , setSidebarDisplay ] = useState(false);
    const [ windowWidth , setwindowWidth ] = useState()

    
      useEffect(() => {
        const handleResize = () => {
            setwindowWidth(window.innerWidth)
            if(window.innerWidth > 650 ){
                return setSidebarDisplay(true)
            }

        };
    
        window.addEventListener("resize", handleResize);
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
        }, []);

        
    return (
            <sidebarContext.Provider value={{ sidebarDisplay , setSidebarDisplay , windowWidth }}>
                {children}
            </sidebarContext.Provider>
    )
}

const useSidebar = () =>  useContext(sidebarContext)

export { SidebarProvider , useSidebar } ;