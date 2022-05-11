import "./smallvideo.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import { numFormatter } from "../../utils/numFormatter";
import { timeFormatter } from "../../utils/timeFormatter";
import { MoreModal } from "../MoreModal/MoreModal";

function SmallVideoCard( { video } ){
    const { _id , title , channel , views , createdAt } = video ;
    const navigate = useNavigate();
    
    const [ moreModal , setMoreModal ] = useState(false);
    const [ modal , setModal ] = useState(false);

   

    return (
        <div className='small-video-card' onClick={() => navigate(`/explore/${_id}`)} >
           
            <img src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`} alt="img" className="small-video-img"/>
            
            <div className="w-100-per">
                <div className="d-flex justify-between">
                    <h5 className='video-card-title'>{title}</h5>
                    <div className='more-modal-btn' onClick={(e) => {
                        e.stopPropagation()
                        setMoreModal(!moreModal)}} >
                        <span className="material-icons-outlined">more_vert</span>
                    </div>
                </div>
                <p className='video-card-channel-title'>{ channel }</p>
                <div className='video-card-channel-title'>{  numFormatter(views) } | { timeFormatter(Date.parse(createdAt)) } ago</div>
            </div>
                        
            { 
                moreModal && <MoreModal value = {{ modal , setModal , video }} />          
            }
        
      </div>
    )
}

export  { SmallVideoCard }