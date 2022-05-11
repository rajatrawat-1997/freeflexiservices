import authHeader from "../auth-header/auth-header";
import axios from "axios";
import removeLocalData from "../../shared/localStorage/removeData";
import getLocalData from "../../shared/localStorage/getData";

let header = authHeader("USER");
console.log("headers",header)
// get base url according to environment
const getBaseURLAccordingToEnvironment = (env) => {

  switch (env) {
    case "prod":
      return "http://3.138.190.154:9000/";
    case "dev":
       //return "http://localhost:4000/";
      
      return "http://3.138.190.154:9000/";
    case "local":
      return "http://localhost:9000/";
    default:
      return "http://3.138.190.154:9000/";
  }
}; 
//const baseURL = getBaseURLAccordingToEnvironment("local");
const baseURL = getBaseURLAccordingToEnvironment("prod");

/*--------------------------------ADMIN SERVICES START------------------------------------*/

async function userSignUp(data) {
  let response = await axios.post(baseURL + "user/register",data);

  let response_data = response.data;
  return response_data;
}

async function sendVerificationCode(data) {
  let response = await axios.post(baseURL + "user/send-verification-code",data);

  let response_data = response.data;
  return response_data;
}

async function login(data) {
  let response = await axios.post(baseURL + "user/login",data);

  let response_data = response.data;
  return response_data;
}


async function forgotPassword(data) {
  let response = await axios.post(baseURL + "user/forgot-password",data);

  let response_data = response.data;
  return response_data;
}

async function resetPassword(data) {
  let response = await axios.post(baseURL + "user/reset-password",data);

  let response_data = response.data;
  return response_data;
}


async function saveKYCdata(data) {
  let response = await axios.post(baseURL + "kyc/save-kyc-data",data,{
    headers: header,
  });
  let response_data = response.data;
  return response_data;
}

async function createWallet(data) {
  let response = await axios.post(baseURL + "crypto/create-wallet",data);

  let response_data = response.data;
  return response_data;
}

async function getWallet(data) {
  let response = await axios.post(baseURL + "crypto/get-wallet",data);

  let response_data = response.data;
  return response_data;
}

async function getCurrentPriceOfETH() {
  let response = await axios.get(baseURL + "ftx/get-current-price-of-eth");

  let response_data = response.data;
  return response_data;
}

async function getCurrentPriceOfBTC() {
  let response = await axios.get(baseURL + "ftx/get-current-price-of-btc");

  let response_data = response.data;
  return response_data;
}



async function getUserKycStatus(data) {
  let response = await axios.post(baseURL + "kyc/get-user-kyc-status",data,{
    headers: header,
  });

  let response_data = response.data;
  return response_data;
}

async function getWalletBalance(data) {
  let response = await axios.post(baseURL + "crypto/get-wallet-balance",data);

  let response_data = response.data;
  return response_data;
}



async function getKycInquiryStatusAndSaveStatus(data) {
  let response = await axios.post(baseURL + "kyc/get-kyc-inquiry-status-and-save",data,{
    headers: header,
  });

  let response_data = response.data;
  return response_data;
}

async function resumeKycForUser(data) {
  let response = await axios.post(baseURL + "kyc/resume-kyc-for-user",data,{
    headers: header,
  });
  let response_data = response.data;
  return response_data;
}


async function kycCancelledByUser(data) {
  let response = await axios.post(baseURL + "kyc/kyc-cancelled-by-user",data,{
    headers: header,
  });

  let response_data = response.data;
  return response_data;
}

async function errorKycByUser(data) {
  let response = await axios.post(baseURL + "kyc/error-kyc-by-user",data,{
    headers: header,
  });

  let response_data = response.data;
  return response_data;
}

async function generateReferralCode(data) {
  let response = await axios.post(baseURL + "user/generate-referral-code",data,{
    headers: header,
  });

  let response_data = response.data;
  return response_data;
}
async function fixedEarnSaveData(data) {
  let response = await axios.post(baseURL + "ftx/fixed-earn-save-data",data,{
    headers: header,
  });

  let response_data = response.data;
  return response_data;
}






let combinedServices = {

  userSignUp,
  sendVerificationCode,
  login,
  forgotPassword,
  resetPassword,
  saveKYCdata,
  createWallet,
  getWallet,
  getCurrentPriceOfETH,
  getCurrentPriceOfBTC,
  getUserKycStatus,
  getWalletBalance,
  getKycInquiryStatusAndSaveStatus,
  resumeKycForUser,
  kycCancelledByUser,
  errorKycByUser,
  generateReferralCode,
  fixedEarnSaveData

 
};

export default combinedServices;
