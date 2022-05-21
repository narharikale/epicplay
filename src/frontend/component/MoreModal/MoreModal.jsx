import { combinedService } from '../../services/combinedServices';
import { useAuth, usePlaylists, useWatchLater } from '../../context';
import './moreModal.css';
import { PlaylistModal } from '../PlaylistModal/PlaylistModal';
import { useParams  , useLocation, Link} from 'react-router-dom';
import { removeVideoService } from '../../services/playlistServices/removeVideoService';
import { SET_SINGLE_PLAYLIST } from '../../constants';

function MoreModal ({ value }){
    const { modal , setModal , video } = value;
    const { playlistDispatch }  = usePlaylists();
    const { playlistId }  = useParams();
    const location = useLocation();
    const { isAuth }  = useAuth();
    const { watchLaterData , setWatchLaterData }  = useWatchLater()

    const saveToWatchLater = async() => {
        const  data  =  await combinedService("post" , "/api/user/watchlater" , isAuth.token , video );
        setWatchLaterData(data.watchlater);
    } 
    const removeFromWatchLater = async() => {
        const  data  =  await combinedService("delete" , "/api/user/watchlater" , isAuth.token , video );
        setWatchLaterData(data.watchlater);
    } 

    const removeVideoFromPlaylist = async() => {
        const { data } = await removeVideoService(playlistId , video._id, isAuth.token);
        playlistDispatch({ type:SET_SINGLE_PLAYLIST , payload:data.playlist})
    }

    return (
        <div className='more-modal'>
            { watchLaterData.find( singlevideo => 
                singlevideo._id === video._id) 
                ? 
                    <div className='more-modal-item' onClick={ (e) =>{
                        e.stopPropagation()
                        removeFromWatchLater() }}>
                    <span className='material-icons'>watch_later</span>
                    Remove from Watch Later
                    </div>
                :   isAuth.status 
                    ?
                        <div className='more-modal-item' onClick={ (e) =>{
                            e.stopPropagation()
                            saveToWatchLater()
                            }}>
                        <span className='material-icons-outlined'>watch_later</span>
                        Save to Watch Later
                        </div>
                    :
                        <Link className='more-modal-item' to='/signin' state={{ from:location }} onClick={ (e) =>{
                            e.stopPropagation()
                            }}>
                        <span className='material-icons-outlined'>watch_later</span>
                        Save to Watch Later
                        </Link>
            }
            
            { isAuth.status 
                ?
                    <div className='more-modal-item' onClick={ (e) =>{ 
                        e.stopPropagation()
                        setModal(!modal)
                        }}>
                        <span className="material-icons-outlined">playlist_add</span>
                        Add to Playlist
                    </div>
                :  
                    <Link className='more-modal-item' to='/signin' state={{ from:location }} onClick={ (e) =>{
                        e.stopPropagation()
                        }}>
                    <span className="material-icons-outlined">playlist_add</span>
                    Add to Playlist
                    </Link>
            }
            
            
           { location.pathname === `/playlist/${playlistId}` 
                ? <div className='more-modal-item' onClick={ (e) =>{ 
                    e.stopPropagation()
                    removeVideoFromPlaylist()
                    }}>
                    <span className="material-icons-outlined">delete</span>
                    Delete from playlist
                </div>
                : " "
           }
            { 
                modal && <PlaylistModal modal={ modal } setmodal={ setModal } video={ video } />
            }
        </div>
    )
}

export { MoreModal }




