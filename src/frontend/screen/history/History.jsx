import axios from 'axios';
import {  Sidebar, SmallVideoCard } from "../../component";
import { useAuth, useHistory } from "../../context";

function History(){

    const { isAuth } = useAuth();
    const { historyData , setHistoryData } = useHistory();
    const id = historyData.length > 0 ? historyData[historyData.length-1]._id : "" ;

    const removeAllHistory = async() => {
        const { data } = await axios.delete("/api/user/history/all" , { headers: { authorization : isAuth.token }}  );
        setHistoryData(data.history);
    }

    
  
    return (
        <div className="explore-main-container">
            <div className="explore-side-container">
                <Sidebar/>
            </div>
            <div className="morepages-container">
                <div className="morepages-video">
                   {  historyData.length > 0  &&
                        <div className="p-relative">
                            <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="img" height='100%' width='100%'/>
                            <div className="morepages-title"> 
                                <div className="d-flex align-center"> 
                                    <span className="material-icons">watch_later</span> 
                                Likes </div>
                            </div>
                            <button className="eplaybtn eplaybtn-primary mx-1" onClick={ removeAllHistory } >Clear All</button>
                        </div>
                   }
                </div>
                <div className="morepages-list-container">
                    { historyData.length !== 0 ?  [...historyData].reverse().map((video, index) => {
                        return (
                                    <SmallVideoCard key={index} video={ video }/>
                        )
                    }) : <div className = "d-flex w-100-per font-size-md " > No videos in watch history</div>

                    }
                </div>
            </div>
        </div>
    )
}

export { History }