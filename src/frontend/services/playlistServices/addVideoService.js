
import axios from 'axios';

const addVideoService = async(id , video , token) => {
    
    try {
        const response = await axios.post(
            `/api/user/playlists/${id}`,
            { video },
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

export { addVideoService };