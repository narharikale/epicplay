import { useParams } from 'react-router-dom';
import { Sidebar, SmallVideoCard } from '../../component';
import '../Explore/Explore.css';
import "./singlevideo.css";
import ReactPlayer from "react-player/youtube";
import { useEffect , useState } from 'react';
import axios from "axios"
import { useAuth, useVideo, useWatchLater } from '../../context';
import { numFormatter } from '../../utils/numFormatter';
import { timeFormatter } from '../../utils/timeFormatter';
import { combinedService } from '../../services/combinedServices';

function SingleVideo(){
    const [video , setVideo] = useState("");
    const { title , channel , channelAvtar , views , createdAt , description} = video ;
    const { id } = useParams();
    const { videos } = useVideo();
    const { watchLaterData , setWatchLaterData }  = useWatchLater();
    const { isAuth } = useAuth();

    useEffect(() => {
        (async () => {
            try{
                const { data } = await axios.get(`/api/video/${id}`);
                setVideo(data.video);
            }catch(error){
                console.error(error)
            }
        })();
      }, [id]);
    
      
    const saveToWatchLater = async() => {
        const  data  =  await combinedService("post" , "/api/user/watchlater" , isAuth.token , video );
        setWatchLaterData(data.watchlater);
    }
    const removeFromWatchLater = async() => {
        const  data  =  await combinedService("delete" , "/api/user/watchlater" , isAuth.token , video );
        setWatchLaterData(data.watchlater);
    }
    return (
        <div className="explore-main-container">
            <div className="explore-side-container">
                <Sidebar/>
            </div>
            <div className="explore-container">
                <div className='single-video-container'>
                    <div className='video-container'>
                        <div className='video-player'>
                            <ReactPlayer
                                className="react-player"
                                width="100%"
                                height="100%"
                                controls={true}
                                url={`http://www.youtube.com/watch?v=${video._id}`}
                            />
                        </div>
                        <div className='video-body'>
                            <div className='single-video-title'>
                                {title}
                            </div>
                            <div className='d-flex justify-between'>
                                <div className='video-card-channel-title'>
                                    {  numFormatter(views) } | { timeFormatter(Date.parse(createdAt)) } ago
                                </div>
                                <div className='d-flex gap-1 '>
                                    <div className='single-video-title-icons'>
                                        <span className="material-icons-outlined">thumb_up</span> 
                                        Like</div> 

                                    { watchLaterData.find( singlevideo => singlevideo._id === id) ? 
                                        <div className='single-video-title-icons' onClick={ removeFromWatchLater }>
                                            <span className="material-icons">watch_later</span>
                                            Remove
                                        </div>
                                        :
                                        <div className='single-video-title-icons' onClick={  saveToWatchLater }>
                                            <span className="material-icons-outlined">watch_later</span>
                                            Watch Later
                                        </div>
                                    }
                                     
                                    <div className='single-video-title-icons'>
                                        <span className='material-icons-outlined'>playlist_add</span>
                                        Add to Playlist</div> 
                                </div>
                            </div>
                            <div className='seperator'/>
                            <div className='single-video-details d-flex gap-1'>
                                <img src={ channelAvtar } alt="channel img" className='br-round channel-img' />
                                <div>
                                    <div>{channel}</div>
                                    <p className='font-size-sm'>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='video-recomendation-list-container'>
                        { videos.map((video) => {
                            return (
                                <SmallVideoCard key={video._id} video={video}/>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export { SingleVideo }