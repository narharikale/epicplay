import './HorizontalVideoCard.css';
import { useState } from 'react'
import { numFormatter } from '../../utils/numFormatter';
import { timeFormatter } from '../../utils/timeFormatter';
import { useNavigate } from 'react-router-dom';
import { MoreModal } from '../MoreModal/MoreModal';



function HorizontalVideoCard ({ video }) {
  const { _id , title , channel , channelAvtar , views , createdAt } = video ;
  const navigate = useNavigate();
  const [ moreModal , setMoreModal ] = useState(false);
  const [ modal , setModal ] = useState(false);


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
        { moreModal && <MoreModal value = {{ modal , setModal , video }} />
        }
        
      </div>
    )
}

export  { HorizontalVideoCard }