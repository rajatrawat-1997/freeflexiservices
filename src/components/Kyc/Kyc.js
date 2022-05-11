import React, { Component } from 'react';
import Persona from 'persona';
import combinedServices from "../../shared/services/user-service";
import getLocalData from "../../shared/localStorage/getData";
export class Kyc extends Component {
  constructor(props) {
        super(props);
        this.state = {
          successMessage:'',
          errorMessage:''
          
      }
        
        
  }


componentDidMount=async()=> {

    if (getLocalData('user_info', 'isLogin')){
      let user_info = getLocalData("user_info", "all");
      this.setState({email:user_info.userData.email})
    }

     
}


  onCompleteKycForm = async(inquiryId) =>{
  
    if(this.props.inquiryStatus==="pending"){
      var completeResponsedata = {
        email:this.state.email,
      }
    let personaCompleteResponse = await combinedServices.resumeKycForUser(completeResponsedata);
    if(personaCompleteResponse.status){
      window.location.href = '/wallet';
     }
    }else if(inquiryId.status == "completed"){

      var completeResponsedata = {
        email:this.state.email,
        inquiryId:inquiryId.inquiryId,
        status:inquiryId.status,
        fields:inquiryId.fields
       
      }
       let personaCompleteResponse = await combinedServices.getKycInquiryStatusAndSaveStatus(completeResponsedata);
      console.log(personaCompleteResponse)
       if(personaCompleteResponse.status){
        window.location.href = '/wallet';
       }


    }

  }
  onErrorKycForm = async() =>{
    var data = {
      email:this.state.email,
	    status: "0",
	    code: "123"
    }
    let response = await combinedServices.errorKycByUser(data);

  }
  onCancelKycForm = async(inquiryId) =>{
    var data = {
      email:this.state.email,
      inquiryId: inquiryId.inquiryId,
      sessionToken:inquiryId.sessionToken
    }
    let response = await combinedServices.kycCancelledByUser(data);

  }

  
 
  render(){
    if(this.props.inquiryStatus==="pending"){
      return (
      
            <div className="kyc_dv_wrapper">
              <div className="kyc_info">
                <Persona.Inquiry
                  accountId={this.props.accountId}
                  environment='sandbox'
                  onLoad={this.onLoadKycForm}
                  onComplete={this.onCompleteKycForm}
                  onError={this.onErrorKycForm}
                  onCancel={this.onCancelKycForm}
                />
              </div>
            </div>
            
          );
    }else{

      return (
       
        <div className="kyc_dv_wrapper">
          
              {this.state.errorMessage ? <div className="errorMessage">{this.state.errorMessage}</div> : ''}
              {this.state.successMessage ? <div className="successMsg">{this.state.successMessage}</div> : ''}
            
          <div className="kyc_info">
            <Persona.Inquiry
              templateId={this.props.templeteId}
              accountId={this.props.accountId}
              environment='sandbox'
              onLoad={this.onLoadKycForm}
              onComplete={this.onCompleteKycForm}
              onError={this.onErrorKycForm}
              onCancel={this.onCancelKycForm}
            />
        </div>
        </div>
        
      );



    }
  }
 }

export default Kyc;