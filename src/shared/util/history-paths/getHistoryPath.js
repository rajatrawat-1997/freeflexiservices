export default function getHistoryPath(key){
    let verifiedData = [];


    try{
        if(sessionStorage.getItem(key)){
            let response = JSON.parse(sessionStorage.getItem(key));
            // console.log(response)

            if(response){
                return [...verifiedData, response];
            }
            else{
                return verifiedData;
            }
        }
    }
    catch(error){
        verifiedData = [];
        return error;
    }
}