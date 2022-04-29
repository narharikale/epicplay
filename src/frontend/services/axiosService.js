import axios from 'axios' ; 

const axiosService = async(method , url , body ) => {
    try{
        const res = await axios[method]( `${url}` , body)
        return res; 
    }catch(error){
        console.error(error)
    }

}


export { axiosService };
