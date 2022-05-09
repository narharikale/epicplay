import './playlistModal.css'
import { useState } from 'react';
import { useAuth, usePlaylists } from '../../context';
import { createPlaylistService } from '../../services/playlistServices/createPlaylistService';
import { SET_PLAYLISTS } from '../../constants';

function PlaylistModal({modal , setmodal }){

    const [ newPlaylist , setNewPlaylist ] = useState({title:"" , desc:""});
    const { isAuth } = useAuth();
    const { playlistState , playlistDispatch } = usePlaylists();

    const createNewPlaylist  = async() => {
        const { data } = await createPlaylistService(isAuth.token , newPlaylist) ;
        playlistDispatch({ type:SET_PLAYLISTS , payload: data.playlists } )
    }

    return (
        <div className="playlist-modal-container">
            <div className='playlist-modal-content'>
                <div className='playlist-modal-header'>
                    <div> Save to...</div>
                    <button onClick={ () => setmodal(!modal)}>
                        <span className='material-icons-sharp font-size-sm'>clear</span> 
                    </button>
                    
                </div>
                <hr className='devider'/>
           
                <div className='playlist-modal-body'>
                    { playlistState && playlistState.map( (playlist) => {
                        return (
                            <div key={playlist._id}>
                                <input type='checkbox' id={playlist._id} />
                                <label htmlFor={playlist._id}> { playlist.title }</label>
                            </div>
                            
                        )
                        })
                    }
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