import { useParams } from "react-router-dom";
import {  Sidebar, SmallVideoCard } from "../../component";
import { usePlaylists } from "../../context";

function Playlist(){
    
    const { playlistState } = usePlaylists();
    const { playlistId } = useParams();
    const currentPlaylist = playlistState.find( (playlist) => playlist._id === playlistId )   ;
    
    return (
        <div className="explore-main-container">
            <div className="explore-side-container">
                <Sidebar/>
            </div>
            { playlistState.length > 0 && currentPlaylist !== undefined  && currentPlaylist.videos.length > 0 ? 
                <div className="morepages-container">
                    <div className="morepages-video">
                    
                            <div className="p-relative">
                                <img src={`https://img.youtube.com/vi/${currentPlaylist?.videos[0]?._id}/maxresdefault.jpg`} alt="img" height='100%' width='100%'/>
                                <div className="morepages-title"> 
                                    <div className="d-flex align-center"> 
                                        <span className="material-icons"> playlist_play</span> 
                                        {currentPlaylist?.title}
                                    </div>
                                </div>
                            </div>
                    
                    </div>
                    <div className="morepages-list-container">
                        {   currentPlaylist?.videos?.map((video, index) => {
                            return (
                                <SmallVideoCard key={index} video={ video }/>
                            )
                        }) 

                        }
                    </div>
                </div> : <div className="d-flex w-100-per font-size-md"> No videos in this playlist yet</div>

            }
           
        </div>
    )
}

export { Playlist }