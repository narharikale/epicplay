import './HorizontalVideoCard.css';
import { useState } from 'react'
import { numFormatter } from '../../utils/numFormatter';
import { timeFormatter } from '../../utils/timeFormatter';
import { useNavigate } from 'react-router-dom';
import { combinedService } from '../../services/combinedServices';
import { useAuth, useWatchLater } from '../../context';
function HorizontalVideoCard ({ video }) {

  const { _id , title , channel , channelAvtar , views , createdAt } = video ;
  const { isAuth }  = useAuth();
  const navigate = useNavigate();
  const { watchLaterData , setWatchLaterData }  = useWatchLater()
  const [ moreModal , setMoreModal ] = useState(false);

  
  const saveToWatchLater = async(e) => {
      e.stopPropagation()
      const  data  =  await combinedService("post" , "/api/user/watchlater" , isAuth.token , video );
      setWatchLaterData(data.watchlater);
  } 
  return(
      <div className='video-card' onClick={() => navigate(`/explore/${_id}`)} >
        <img src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`} alt="img" height='100%' width='100%'/>
        <div className='channel-container p-relative'>
          <img src={ channelAvtar } alt="channel-avtr" className='br-round channel-img' />
          <div className='w-100-per'>
            <div className='title-container'>
              <h5 className='video-card-title'> { title } </h5>
            </div>
            <p className='video-card-channel-title'>{ channel }</p>
            <div className='video-card-channel-title'>{  numFormatter(views) } | { timeFormatter(Date.parse(createdAt)) } ago</div>
          </div>
          <div className='more-modal-btn' onClick={(e) => {
            e.stopPropagation();
            setMoreModal(!moreModal)}} >
            <span className="material-icons-outlined">more_vert</span>
          </div>
        </div>
        { moreModal && 
          <div className='more-modal'>
            { watchLaterData.find( singlevideo => singlevideo._id === _id) ? 
              <div className='more-modal-item' onClick={ (e) =>  saveToWatchLater(e) }>
                <span className='material-icons'>watch_later</span>
                Remove from Watch Later
              </div> : 
              <div className='more-modal-item' onClick={ (e) =>  saveToWatchLater(e) }>
                <span className='material-icons-outlined'>watch_later</span>
                Save to Watch Later
              </div>

            }
            
            <div className='more-modal-item'>
              <span className="material-icons-outlined">playlist_add</span>
                Add to Playlist
            </div>
          </div>
        }
      </div>
    )
}

export  { HorizontalVideoCard }