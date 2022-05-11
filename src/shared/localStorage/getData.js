export default function getLocalData(key, type = "all") {
 
  var responseObject = null;

  try {
    if (key) {
      var response;

      response = JSON.parse(atob(localStorage.getItem(key)));
     
      let USERDATA;
      // if(key === 'user_info'){
      //     USERDATA = response.userData
      // }
      // else{
      //     USERDATA = response.userData.result1
      // }
      USERDATA = response.userData;

      
     
      switch (type) {
        case "all":
          responseObject = response ? response : null;
          break;

        case "isLogin":
          responseObject = response ? response.isLogin : false;
          break;

        case "getToken":
          responseObject = response ? USERDATA.token : null;
          break;

        case "getId":
          responseObject = response ? USERDATA.userId : null;
          break;

        case "registrationData":
          responseObject = response ? USERDATA : null;
          break;

        default:
          responseObject = null;
          break;
      }
    }
  } catch (e) {
    responseObject = null;
  }

  return responseObject;
}
