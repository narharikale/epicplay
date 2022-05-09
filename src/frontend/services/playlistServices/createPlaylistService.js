import axios from 'axios';

const createPlaylistService = async (token, newplaylist) => {
    console.log(token , newplaylist)
    try {
        const response = await axios.post(
            "/api/user/playlists",
            { playlist: {...newplaylist } },
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

export { createPlaylistService };