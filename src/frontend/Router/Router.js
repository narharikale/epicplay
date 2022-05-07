import { Navigate, Route, Routes , } from "react-router-dom";
import Mockman from 'mockman-js';
import { Home , Signin , Signup , Explore, NotFound, SingleVideo, WatchLater, LikedVideos, History } from "../screen";
import { useAuth } from '../context'
import { PrivateRoute } from "../component";


function Routers(){
    const { isAuth } = useAuth(); 
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/explore/:id" element={<SingleVideo/>} />
            { !isAuth.status &&  (
                <>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                </>
            )}
            <Route path="/watchlater" element={ 
                <PrivateRoute>
                    <WatchLater/>
                </PrivateRoute> 
            }/>
            <Route path="/likedvideos" element={ 
                <PrivateRoute>
                    <LikedVideos/>
                </PrivateRoute> 
            }/>
            <Route path="/history" element={ 
                <PrivateRoute>
                    <History/>
                </PrivateRoute> 
            }/>
            

            <Route path="/notfound" element={<NotFound/>}/>
            <Route path="*" element={<Navigate to='/notfound' replace/> } />
            <Route path="/mock" element={<Mockman/>} />
        </Routes>
    )
}

export { Routers }