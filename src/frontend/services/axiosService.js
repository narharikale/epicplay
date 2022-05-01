import axios from 'axios' ; 

const axiosService = async(method , url , body ) => {
    try{
        switch(method){
            case 'get':
                const res = await axios[method]( `${url}`)
                return res; 
            case 'post':
                const response = await axios[method]( `${url}` , body)
                return response;
            case 'delete':
                const resp = await axios[method]( `${url}` , body)
                return resp;
            default:
                return;
        }
    }catch(error){
        console.error(error)
    }

}


export { axiosService };
