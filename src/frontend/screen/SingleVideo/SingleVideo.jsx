import { useParams } from 'react-router-dom';
import { PlaylistModal, Sidebar, SmallVideoCard } from '../../component';
import '../Explore/Explore.css';
import "./singlevideo.css";
import ReactPlayer from "react-player/youtube";
import { useEffect , useState } from 'react';
import axios from "axios"
import { useAuth, useHistory, useLikes, useVideo, useWatchLater } from '../../context';
import { numFormatter } from '../../utils/numFormatter';
import { timeFormatter } from '../../utils/timeFormatter';
import { combinedService } from '../../services/combinedServices';

function SingleVideo(){
    const [video , setVideo] = useState("");
    const [modal , setModal] = useState(false);
    const { title , channel , channelAvtar , views , createdAt , description} = video ;
    const { videoId } = useParams();
    const { videos } = useVideo();
    const { watchLaterData , setWatchLaterData }  = useWatchLater();
    const { likesData , setLikesData } = useLikes();
    const { setHistoryData }  = useHistory();
    const { isAuth } = useAuth();
     
    useEffect(() => {
        (async () => {
            try{
                const { data } = await axios.get(`/api/video/${videoId}`);
                setVideo(data.video);
            }catch(error){
                console.error(error)
            }
        })();
      }, [videoId]);
    
      
    const saveToWatchLater = async() => {
        const  data  =  await combinedService("post" , "/api/user/watchlater" , isAuth.token , video );
        setWatchLaterData(data.watchlater);
    }
    
    const removeFromWatchLater = async() => {
        const  data  =  await combinedService("delete" , "/api/user/watchlater" , isAuth.token , video );
        setWatchLaterData(data.watchlater);
    }

    const addToLikes = async() => {
        const  data  =  await combinedService("post" , "/api/user/likes" , isAuth.token , video );
        setLikesData(data.likes);
    }

    const removeFromLikes = async() => {
        const  data  =  await combinedService("delete" , "/api/user/likes" , isAuth.token , video );
        setLikesData(data.likes);
    }

    const addToHistory = async() =>  {
        const  data  =  await combinedService("post" , "/api/user/history" , isAuth.token , video );
        setHistoryData(data.history);
    }

    return (
        <>
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
                                onStart = { addToHistory }
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

                                    { likesData.find( singlevideo => singlevideo._id === videoId) ? 
                                        <div className='single-video-title-icons' onClick={ removeFromLikes }>
                                            <span className="material-icons">thumb_up</span> 
                                            Unlike
                                        </div>
                                        :
                                        <div className='single-video-title-icons' onClick={  addToLikes }>
                                            <span className="material-icons-outlined">thumb_up</span> 
                                            Like
                                        </div>
                                    }

                                    { watchLaterData.find( singlevideo => singlevideo._id === videoId) ? 
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
                                     
                                    <div className='single-video-title-icons' onClick={ () => setModal(!modal)}>
                                        <span className='material-icons-outlined'>playlist_add</span>
                                        Add to Playlist
                                        
                                    </div> 
                                </div>
                            </div>
                            <div className='seperator'/>
                            <div className='single-video-details d-flex gap-1'>
                                <img src={ channelAvtar } alt="channel img" className='br-round channel-img' />
                                <div>
                                    <div>{ channel }</div>
                                    <p className='font-size-sm'>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='video-recomendation-list-container'>
                        { videos.map((video) => {
                            return (
                                <SmallVideoCard key={ video._id } video={ video }/>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
            
        </div>
        { modal && <PlaylistModal modal={ modal } setmodal={ setModal }  video={ video }/>
        }
        </>
    )
}


export { SingleVideo }