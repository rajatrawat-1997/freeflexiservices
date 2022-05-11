
export default function removeLocalData(key) 
{
    var responseStatus = false;
    
    switch (key) 
    {
        case 'user_info':
       
            localStorage.removeItem(key);
            responseStatus = true;
            break;


        case 'admin_info':
    
            localStorage.removeItem(key);
            responseStatus = true;
            break;

        default:
            responseStatus = false;

            break;
    }

    return responseStatus;
}
