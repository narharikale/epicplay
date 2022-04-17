import { createContext, useContext , useEffect} from "react";
import axios from 'axios';
import { useState } from "react";

const videoContext = createContext();

function VideoProvider({children}) {

    const [videos , setVideos] = useState([])

    useEffect(()=>{
        (async function getvideos() {
            try{
                const response = await axios.get('api/videos') 
                setVideos(response.data.videos)
            }catch (error){
                console.error(error)
            }
        })();
       
    } , [])
  
    return(
        <videoContext.Provider value={{ videos }}>
            {children}
        </videoContext.Provider>
    )
}

const useVideo = () => useContext(videoContext);
export { VideoProvider , useVideo }