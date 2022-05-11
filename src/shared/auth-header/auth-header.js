import getLocalData from "../localStorage/getData";
export default function authHeader(requesttype){

    let token_res = null;
    let authToken;
    let  id_res;

    let header = {
        "_id": '',
        "Authorization": ''
    }

    try{
        if(requesttype){
            switch(requesttype){
                case 'ADMIN':
                    token_res = getLocalData('admin_info','getToken');
                    id_res = getLocalData('admin_info','getId');
                    authToken =`${token_res}`
                    header = {
                       
                        "x-access-token":authToken
                    }
                    break;
                        
        
                case 'USER':
                    token_res = getLocalData("user_info", "all")
                    header = {
                        "x-access-token":token_res.userData.token 
                    }
                    break;
                
                default :
                    token_res = 'No user found'
                    break;
        
            }
        }
    }
    catch(e){
        token_res = null;
    }
    return header;
    
}