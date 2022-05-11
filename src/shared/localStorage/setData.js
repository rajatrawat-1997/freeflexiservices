

export default function setLocalData(key, value) 
{  
    console.log("ashgdhasgdh" ,value)
    var responseStatus = false;
    let initialState = {}

    switch (key) 
    {
        
        case 'user_info':
           
            initialState = {
                isLogin: true,
                isRegistered: true,
                userData:value
                
            };
            localStorage.setItem(key, btoa(JSON.stringify(initialState)));
            
            responseStatus = true;
            
            break;

        case 'inquiry_status':
            
            initialState = {
                isStatus: true,
                inquiryData: value,
                
              
            };
        
            localStorage.setItem(key, btoa(JSON.stringify(initialState)));
            responseStatus = true;
            
            break;
        default:
            responseStatus = false;

            break;
    }

    return responseStatus;
}