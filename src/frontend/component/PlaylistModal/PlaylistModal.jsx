import './playlistModal.css'
import { useState } from 'react';
import { useAuth } from '../../context';
import { createPlaylistService } from '../../services/playlistServices/createPlaylistService';

function PlaylistModal({modal , setmodal }){

    const [ newPlaylist , setNewPlaylist ] = useState({title:"" , desc:""});
    const { isAuth } = useAuth()

    const createNewPlaylist  = async() => {
        const { data } = await createPlaylistService(isAuth.token , newPlaylist) ;
        
    }
    return (
        <div className="playlist-modal-container">
            <div className='playlist-modal-content'>
                <div className='d-flex w-100-per justify-between'>
                    <div> Save to...</div>
                    <button onClick={ () => setmodal(!modal)}>
                        <span className='material-icons-sharp font-size-sm'>clear</span> 
                    </button>
                    
                </div>
                <hr className='devider'/>
                <div className='playlist-modal-body'>
                    My Plalistss
                </div>
                <hr className='devider'/>
                <div className='playlist-modal-footer'>
                    <input placeholder='Playlist Name' onChange={ (e) => setNewPlaylist({...newPlaylist , title : e.target.value }) } />
                    <input placeholder='Description' onChange={ (e) => setNewPlaylist({...newPlaylist , desc : e.target.value }) } />
                    <button onClick={ createNewPlaylist }>+  Create New Playlist </button>
                </div>
            </div>
        </div>
    )
}

export { PlaylistModal }