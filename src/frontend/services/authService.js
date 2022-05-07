import axios from 'axios' ; 

const authService = async(method , url , body ) => {
    try{
        const response = await axios[method]( `${url}` , body)
        return response;

    }catch(error){
        console.error(error)
    }

}


export { authService };
