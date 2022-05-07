import axios from 'axios' ; 

const combinedService = async(method , url , token , video ) => {
    try{
        switch(method){
            case "get" : {
                const { data } = await axios[method](`${url}` ,
                    { 
                        headers:{
                            authorization:token 
                        }
                    }
                
                )
                return data;
            }
            case "post" : {
                const { data } = await axios[method](`${url}` , { video },
                    { 
                        headers:{
                            authorization:token 
                        }
                    }
                
                )
                return data;
            }
            case "delete" : {
                const { data } = await axios[method](`${url}` ,
                    { 
                        headers:{
                            authorization:token 
                        }
                    }
                
                )
                return data;
            }
            default:
                return;
        }
        

    }catch(error){
        console.error(error)
    }

}


export { combinedService };
