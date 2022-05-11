import axios from 'axios';

const deleteplaylistService = async (playlistId , token) => {
    try {
        const response = await axios.delete(
            `/api/user/playlists/${playlistId}`,
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

export { deleteplaylistService };