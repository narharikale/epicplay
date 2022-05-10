
import axios from 'axios';

const removeVideoService = async(playlistId , videoId , token) => {
    
    try {
        const response = await axios.delete(
            `/api/user/playlists/${playlistId}/${videoId}`,
            {
              headers: {
                authorization: token,
              },
            }
          );
        return response;

    } catch (error) {
        console.error(error)
    }

}

export { removeVideoService };