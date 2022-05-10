import { Navigate, Route, Routes , } from "react-router-dom";
import Mockman from 'mockman-js';
import { Home , Signin , Signup , Explore, NotFound, SingleVideo, WatchLater, LikedVideos, History, Playlist } from "../screen";
import { useAuth } from '../context'
import { RequireAuth } from "../component";



function Routers(){
    const { isAuth } = useAuth(); 
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/explore/:videoId" element={<SingleVideo/>} />
            
            { !isAuth.status &&  (
                <>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                </>
            )}

            <Route path="/watchlater" element={ 
                <RequireAuth>
                    <WatchLater/>
                </RequireAuth> 
            }/>
            
            <Route path="/likedvideos" element={ 
                <RequireAuth>
                    <LikedVideos/>
                </RequireAuth> 
            }/>
            <Route path="/history" element={ 
                <RequireAuth>
                    <History/>
                </RequireAuth> 
            }/>

            <Route path="/playlist/:playlistId" element={ 
                <RequireAuth>
                    <Playlist/>
                </RequireAuth> 
            }/>
            

            <Route path="/notfound" element={<NotFound/>}/>
            <Route path="*" element={<Navigate to='/notfound' replace/> } />
            <Route path="/mock" element={<Mockman/>} />
        </Routes>
    )
}

export { Routers }