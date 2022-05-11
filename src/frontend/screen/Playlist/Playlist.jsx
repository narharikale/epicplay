import { useNavigate, useParams } from "react-router-dom";
import {  Sidebar, SmallVideoCard } from "../../component";
import { SET_PLAYLISTS } from "../../constants";
import { useAuth, usePlaylists } from "../../context";
import { deleteplaylistService } from "../../services/playlistServices/deletePlaylistService";

function Playlist(){
    const { isAuth }  = useAuth();
    const { playlistState , playlistDispatch } = usePlaylists();
    const { playlistId } = useParams();
    const navigate = useNavigate();

    const currentPlaylist = playlistState.find( (playlist) => playlist._id === playlistId );

    const deletePlaylist = async() => {
        const { data } = await deleteplaylistService(playlistId , isAuth.token);
        playlistDispatch({ type:SET_PLAYLISTS , payload: data.playlists } )
        navigate('/explore')
    }
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
                                    <button className="d-flex align-center icon-btn" title="Delete Playlist" onClick={ deletePlaylist }> 
                                         <span className="material-icons">delete</span>
                                    </button>
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
                </div> 
                :<div>
                    <div className="d-flex w-100-per font-size-md">
                            No videos in this playlist yet
                    </div>
                    <button className="eplaybtn eplaybtn-primary" onClick={ deletePlaylist }> Delete playlist </button>
                </div>

            }
           
        </div>
    )
}

export { Playlist }