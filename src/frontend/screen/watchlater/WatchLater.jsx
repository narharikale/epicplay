import {  Sidebar, SmallVideoCard } from "../../component";
import { useWatchLater } from "../../context";
import './watchlater.css';

function WatchLater(){
    
    const { watchLaterData } = useWatchLater();
    const id = watchLaterData.length > 0 ? watchLaterData[watchLaterData.length-1]._id : "" 
    return (
        <div className="explore-main-container">
            <div className="explore-side-container">
                <Sidebar/>
            </div>
            <div className="morepages-container">
                <div className="morepages-video">
                   {  watchLaterData.length > 0  &&
                        <div className="p-relative">
                            <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="img" height='100%' width='100%'/>
                            <div className="morepages-title"> 
                                <div className="d-flex align-center"> 
                                    <span className="material-icons">watch_later</span> 
                                Watch List</div>
                            </div>
                        </div>
                   }
                </div>
                <div className="morepages-list-container">
                    { watchLaterData.length !== 0 ?  [...watchLaterData].reverse().map((video, index) => {
                        return (
                            <SmallVideoCard key={index} video={ video }/>
                        )
                    }) : <div> this is empty</div>

                    }
                </div>
            </div>
        </div>
    )
}

export { WatchLater }