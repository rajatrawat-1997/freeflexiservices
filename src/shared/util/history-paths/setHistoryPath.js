export default function setHistoryPath(key, value){
    let verified_response = false;

    console.log('inhistory path',value);

    let combinedHistory  = [];
    const initialState = {
       pathName: value.pathname,
       pathVerified: value.pathverified
    };

    console.log('final history',combinedHistory.push(initialState));



    sessionStorage.setItem(key, JSON.stringify(initialState));
    verified_response = true;
   
}
