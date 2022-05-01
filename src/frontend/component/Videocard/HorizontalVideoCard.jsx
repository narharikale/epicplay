import './HorizontalVideoCard.css'
import { numFormatter } from '../../utils/numFormatter';
import { timeFormatter } from '../../utils/timeFormatter';
import { useNavigate } from 'react-router-dom';
function HorizontalVideoCard ({ video }) {

  const { _id , title , channel , channelAvtar , views , createdAt } = video
  const navigate = useNavigate();
  
  return(
      <div className='video-card' onClick={() => navigate(`/explore/${_id}`)} >
        <img src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`} alt="img" height='100%' width='100%'/>
        <div className='channel-container p-relative'>
          <img src={ channelAvtar } alt="" className='br-round channel-img' />
          <div className='w-100-per'>
            <div className='title-container'>
              <h5 className='video-card-title'>{title}</h5>
              <div className='more-dropdown'>
                <span className="material-icons-outlined">more_vert</span>
              </div>
            </div>
            <p className='video-card-channel-title'>{ channel }</p>
            <div className='video-card-channel-title'>{  numFormatter(views) } | { timeFormatter(Date.parse(createdAt)) } ago</div>
          </div>
        </div>
      </div>
    )
}

export  { HorizontalVideoCard }