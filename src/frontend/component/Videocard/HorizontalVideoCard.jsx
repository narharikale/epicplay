import './HorizontalVideoCard.css';
import { useState } from 'react'
import { numFormatter } from '../../utils/numFormatter';
import { timeFormatter } from '../../utils/timeFormatter';
import { useNavigate } from 'react-router-dom';
function HorizontalVideoCard ({ video }) {

  const { _id , title , channel , channelAvtar , views , createdAt } = video
  const navigate = useNavigate();
  const [ moreModal , setMoreModal ] = useState(false)
  return(
      <div className='video-card' onClick={() => navigate(`/explore/${_id}`)} >
        <img src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`} alt="img" height='100%' width='100%'/>
        <div className='channel-container p-relative'>
          <img src={ channelAvtar } alt="" className='br-round channel-img' />
          <div className='w-100-per'>
            <div className='title-container'>
              <h5 className='video-card-title'> {title} </h5>
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
            <div className='more-modal-item'>
              <span className='material-icons-outlined'>watch_later</span>
                Save to Watch Later
            </div>
            <div className='more-modal-item'>
              <span class="material-icons-outlined">playlist_add</span>
               Add to Playlist
            </div>
          </div>
        }
      </div>
    )
}

export  { HorizontalVideoCard }