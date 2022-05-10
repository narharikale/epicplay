import './playlistModal.css'
import { useState } from 'react';
import { useAuth, usePlaylists } from '../../context';
import { createPlaylistService } from '../../services/playlistServices/createPlaylistService';
import { SET_PLAYLISTS, SET_SINGLE_PLAYLIST } from '../../constants';
import { addVideoService } from '../../services/playlistServices/addVideoService';

function PlaylistModal({ modal , setmodal , video }){

    const [ newPlaylist , setNewPlaylist ] = useState({title:"" , desc:""});
    const { isAuth } = useAuth();
    const { playlistState , playlistDispatch } = usePlaylists();
    
    const createNewPlaylist  = async() => {
        const { data } = await createPlaylistService(isAuth.token , newPlaylist) ;
        playlistDispatch({ type:SET_PLAYLISTS , payload: data.playlists } )
    }

    const addVideoToPlaylist = async( playlistid ) => {
        const { data } = await addVideoService(playlistid , video , isAuth.token);
        playlistDispatch({ type:SET_SINGLE_PLAYLIST , payload:data.playlist})
    }

    return (
        <div className="playlist-modal-container" onClick={ (e) =>  e.stopPropagation() }>
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
                                <input type='checkbox' id={playlist._id } onChange ={ () => addVideoToPlaylist( playlist._id ) } />
                                <label htmlFor={playlist._id}> { playlist.title }</label>
                            </div>
                        )
                        })
                    }
                </div>
                <hr className='devider'/>
                <div className='playlist-modal-footer'>
                    <form onSubmit={ (e) => { 
                        e.preventDefault()
                        createNewPlaylist()
                        }} >
                        <input placeholder='Playlist Name' required onChange={ (e) =>{ 
                            setNewPlaylist({...newPlaylist , title : e.target.value })} } />
                        <input placeholder='Description' required onChange={ (e) =>{ 
                            setNewPlaylist({...newPlaylist , desc : e.target.value })} } />  
                                                
                        <button type='submit'>+  Create New Playlist </button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export { PlaylistModal }