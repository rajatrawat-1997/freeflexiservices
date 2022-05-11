import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './IdentityVerification.scss';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Flexible_earn_table from '../../components/Flexible_earn_table/Flexible_earn_table';
import EarnIntrest_Tab from '../../components/EarnInrest_Tab/EarnIntrest_Tab';
import blue_check_icon from '../../assets/images/blue_check_icon.png';
import white_dotes_icon from '../../assets/images/white_dotes_icon.png';

import govtID_icon from '../../assets/images/govtID_icon.png';
import selfId_icon from '../../assets/images/selfId_icon.png';
import capture_icon from '../../assets/images/capture_icon.png';
import Inquiry from '../../components/Kyc/Kyc';
import Persona from 'persona';
import combinedServices from "../../shared/services/user-service";
import getLocalData from "../../shared/localStorage/getData";

export class IdentityVerification extends Component {
constructor(props){
  super(props);
  this.state = {
      govermentID:false, 
      accountId:''
    };
}

componentDidMount=async()=> {

        if (getLocalData('user_info', 'isLogin')){
             let user_info = getLocalData("user_info", "all");
             let fields = this.state.fields;
             let userDetails = user_info.userData ;
             this.setState({userDetails: user_info.userData})
            var data = {
                email:user_info.userData.email
            }
            let response = await combinedServices.getUserKycStatus(data);
            var responseData = response.data;
           this.setState({accountId:responseData.accountId,inquiryStatus:responseData.inquiryStatus})
            
        }
 }

identityVerificationByGovermentId = () =>{

  this.setState({
    govermentID: true,
    templateId:'tmpl_jJNkkpzhvApsNuVgqUF9G296'
   
  });
}

identityVerificationBySelfie = () =>{

  this.setState({
    govermentID: true,
    templateId:'tmpl_Yr4MegWJjNsLmonrGfz5GLdV'
   
  });
}
    

 
render () {
        return (
            <div>
            <Header/>
                <div className="middleCon">
                    <div className="middleCon_Inner">
                        <div className="container">
                            <div className="pageHD_BoxWrap d-flex"><div class="pageHD">Identity Verification</div></div>
                            <div className="topHD_bannerBox mb-3">
                                <div className="kyc_topBannerBox  d-flex justify-content-center">                                    
                                    <div className="kyc_topBanner_HD">
                                        <div className="white_checkIcon_box" >
                                            <img src={blue_check_icon} alt="" />
                                        </div>
                                        <div className="">Account <br></br>Verification</div>
                                    </div>
                                    <div className="white_doteWrap">
                                        <img src={white_dotes_icon} alt="" />
                                    </div>
                                    <div className="kyc_topBanner_HD">
                                        <div className="white_checkIcon_box">
                                            <img src={blue_check_icon} alt="" / >
                                        </div>
                                        <div>Identity <br></br>Verification</div>
                                    </div>
                                </div>
                            </div>
                            <form>
                            <div className="accountVerific_whiteBox">
                                <div className="account_kyc_secHD d-flex justify-content-center">IDENTITY VERIFICATION</div>

                                 {!this.state.govermentID ? (
                                <div className="identityVerification_boxWrap d-flex justify-content-center">
                                    <div className="identityVerification_box">
                                        <div className="identityVerification_boxInner" onClick={this.identityVerificationByGovermentId}>
                                            <div className="verification_idIcon">
                                                <img src={govtID_icon} alt="" />
                                            </div>
                                            <div className="verification_idHD">Driver's License</div>
                                            <div className="">
                                                <img src={capture_icon} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="identityVerification_box">
                                        <div className="identityVerification_boxInner" onClick={this.identityVerificationBySelfie}>
                                            <div className="verification_idIcon">
                                                <img src={selfId_icon} alt="" />
                                            </div>
                                            <div className="verification_idHD">ID Card</div>
                                            <div className="">
                                                <img src={capture_icon} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ):<Inquiry templeteId={this.state.templateId} accountId={this.state.accountId} inquiryStatus={this.state.inquiryStatus}/> }
                            </div> 
                            {/*
                            <div class="continueBtn_wrap">
                                <button class="continue_btn btn btn-secondary">Verify</button>
                            </div> */}
                            
                            </form>                                                   
                        </div>
                    </div>
                </div>
                

                
        

                <div className="copyRight-sec al_Footer">
                    <Footer />
                </div>

            </div>
        );
    }
}
export default IdentityVerification;