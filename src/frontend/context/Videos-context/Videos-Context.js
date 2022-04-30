import { createContext, useContext , useEffect} from "react";
import axios from 'axios';
import { useState } from "react";

const videoContext = createContext();

function VideoProvider({children}) {

    const [videos , setVideos] = useState([])
    const [categories , setCategories] = useState([])
    useEffect(()=>{
        (async function getvideos() {
            try{
                const { data } = await axios.get('api/videos') 
                setVideos(data.videos)
            }catch (error){
                console.error(error)
            }
        })();
       
    } , [])
    useEffect( () => {
        (async function getCategories(){
            try{
                const { data } = await axios.get('/api/categories')
                setCategories(data.categories)
            }catch(error){
                console.error(error)
            }
        })()
    } , [])
    
    return(
        <videoContext.Provider value={{ videos , categories  , setVideos}}>
            {children}
        </videoContext.Provider>
    )
}

const useVideo = () => useContext(videoContext);
export { VideoProvider , useVideo }