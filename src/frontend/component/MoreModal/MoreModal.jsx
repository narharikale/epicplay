import { combinedService } from '../../services/combinedServices';
import { useAuth, useWatchLater } from '../../context';
import './moreModal.css';
import { PlaylistModal } from '../PlaylistModal/PlaylistModal';


function MoreModal ({ value }){
    const { modal , setModal , video } = value;
   
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


    return (
        <div className='more-modal'>
            { watchLaterData.find( singlevideo => singlevideo._id === video._id) ? 
                <div className='more-modal-item' onClick={ (e) =>  removeFromWatchLater(e) }>
                <span className='material-icons'>watch_later</span>
                Remove from Watch Later
                </div> : 
                <div className='more-modal-item' onClick={ (e) =>  saveToWatchLater(e) }>
                <span className='material-icons-outlined'>watch_later</span>
                Save to Watch Later
                </div>
            }
        
            <div className='more-modal-item' onClick={ (e) =>{ 
                e.stopPropagation()
                setModal(!modal)
                }}>
                <span className="material-icons-outlined">playlist_add</span>
                Add to Playlist
            </div>
            
            { 
                modal && <PlaylistModal modal={ modal } setmodal={ setModal } video={ video } />
            }
        </div>
    )
}

export { MoreModal }




