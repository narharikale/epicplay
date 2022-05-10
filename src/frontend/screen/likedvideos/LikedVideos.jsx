import {  Sidebar, SmallVideoCard } from "../../component";
import { useLikes } from "../../context";

function LikedVideos(){
    
    const { likesData } = useLikes()
    const id = likesData.length > 0 ? likesData[likesData.length-1]._id : "" 
    return (
        <div className="explore-main-container">
            <div className="explore-side-container">
                <Sidebar/>
            </div>
            <div className="morepages-container">
                <div className="morepages-video">
                   {  likesData.length > 0  &&
                        <div className="p-relative">
                            <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="img" height='100%' width='100%'/>
                            <div className="morepages-title"> 
                                <div className="d-flex align-center"> 
                                    <span className="material-icons">watch_later</span> 
                                Likes </div>
                            </div>
                        </div>
                   }
                </div>
                <div className="morepages-list-container">
                    { likesData.length !== 0 ?  [...likesData].reverse().map((video, index) => {
                        return (
                            <SmallVideoCard key={index} video={ video }/>
                        )
                    }) : <div className="d-flex w-100-per font-size-md"> No liked videos yet</div>

                    }
                </div>
            </div>
        </div>
    )
}

export { LikedVideos }