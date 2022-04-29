import { Navigate, Route, Routes , } from "react-router-dom";
import Mockman from 'mockman-js';
import { Home , Signin , Signup , Explore, NotFound } from "../screen";
import { useAuth } from '../context'

function Routers(){
    const { isAuth } = useAuth(); 
    return(
        <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/explore" element={<Explore/>}/>
            { !isAuth.status &&  (
                <>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                </>
            )}
            <Route path="/notfound" element={<NotFound/>}/>
            <Route path="*" element={<Navigate to='/notfound' replace/> } />
            <Route path="/mock" element={<Mockman/>} />
        </Routes>
    )
}

export { Routers }